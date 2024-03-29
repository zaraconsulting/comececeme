from flask import current_app as app, session, jsonify, request
from flask_login import current_user
from app.models import Product, Customer, Order, Category, ProductCategory, Service, ServiceCategory, Hair, HairCategory, Cart, Pattern, HairCategory
from sqlalchemy import func, desc
from app import db
import os

@app.context_processor
def get_all_products():
    category = HairCategory.query.filter_by(name='Extensions').first()
    pattern_list = list(set([i.pattern for i in Hair.query.filter_by(category_id=category.id).all()])) if Hair.query.all() else []
    products = []
    for pattern in pattern_list:
        hair_products = Hair.query.filter_by(category_id=category.id).all()
        display_products = []
        for i in hair_products:
            if i.pattern == pattern and i.pattern not in [a_dict for a_dict in display_products]:
                display_products.append({'name': i.pattern, 'display_name': Pattern.query.filter_by(name=i.pattern).first().display_name, 'price': i.price})
                break
        a_dict = {
            'pattern': display_products,
            'image': Pattern.query.filter_by(name=pattern).first().image,
            'category': {
                'name': category.name,
                'display_name': category.display_name
            }
        }
        products.append(a_dict)

    data = {
        'context_products': products,
        'context_beauty_products': [i.to_dict() for i in Product.query.all()],
        'context_wigs': [i.to_dict() for i in Hair.query.filter_by(is_wig=True).all() if i.is_viewable]
    }
    return data

@app.context_processor
def inject_cart():
    if 'coupon' not in session:
        session['coupon'] = None
    # if 'shopping_cart' not in session:
    #     session['shopping_cart'] = None
    tax = .00
    # tax = .06
    
    try:
        items = []
        # print(current_user.cart.all())
        for i in current_user.cart.all():
            if i.product_id is not None:
                data = dict(
                        bundle_length=Hair.query.get(i.product_id).bundle_length, 
                        length=Hair.query.get(i.product_id).length or Hair.query.get(i.product_id).bundle_length,
                        category=HairCategory.query.get(Hair.query.get(i.product_id).category_id).name, 
                        pattern=Pattern.query.filter_by(name=Hair.query.get(i.product_id).pattern).first().display_name, 
                        prod_id=Hair.query.get(i.product_id).id, 
                        price=Hair.query.get(i.product_id).price, 
                        quantity=len(Cart.query.filter_by(product_id=i.product_id).all())
                    )
                if Hair.query.get(i.product_id).image:
                    data['name'] = Hair.query.get(i.product_id).name
                    data['image'] = Hair.query.get(i.product_id).image
                else:
                    data['name'] = Hair.query.get(i.product_id).pattern
                    data['image']=Pattern.query.filter_by(name=Hair.query.get(i.product_id).pattern).first().image
                if data not in items:
                    items.append(data)
            elif i.beauty_product_id is not None:
                data = dict(
                        bundle_length=None, 
                        size=Product.query.get(i.beauty_product_id).size,
                        length=None,
                        category=ProductCategory.query.get(Product.query.get(i.beauty_product_id).category_id).name, 
                        pattern=None, 
                        prod_id=Product.query.get(i.beauty_product_id).id, 
                        price=Product.query.get(i.beauty_product_id).price, 
                        quantity=len(Cart.query.filter_by(beauty_product_id=i.beauty_product_id).all())
                    )
                # print(data)
                if Product.query.get(i.beauty_product_id).image:
                    data['name'] = Product.query.get(i.beauty_product_id).name
                    data['image'] = Product.query.get(i.beauty_product_id).image
                if data not in items:
                    items.append(data)
            # print(data)
        total = sum([Hair.query.filter_by(id=i.product_id).first().price for i in current_user.cart.all() if i.product_id is not None])
        total += sum([Product.query.filter_by(id=i.beauty_product_id).first().price for i in current_user.cart.all() if i.beauty_product_id is not None])
        if session.get('coupon') is not None:
            # print("works")
            grandTotal = total + (total * tax) - (total * session.get('coupon')['discount'])
        else: 
            grandTotal = total + (total * tax)
        # print(grandTotal)
        cart_dict = dict(
                shopping_cart=items, 
                total=total, 
                tax=tax, 
                grandTotal=grandTotal, 
                fullCart=[i for i in current_user.cart.all()], 
                coupon=session.get('coupon') or 0
            )
        # print(cart_dict)
        session['shopping_cart'] = cart_dict.get('shopping_cart')
        # print(cart_dict)
        session['payment_shopping_cart'] = {
            'products': cart_dict.get('shopping_cart'),
            'subtotal': cart_dict.get('total'),
            'tax': cart_dict.get('tax'),
            'coupon': cart_dict.get('coupon'),
            'grandTotal': cart_dict.get('grandTotal')
        }
        # print(session.get('payment_shopping_cart'))
        # print(session.get('payment_shopping_cart')['products'])
        # print(cart_dict)
        # print(cart_dict)
        return cart_dict
    except:
        session['payment_shopping_cart'] = {
            'products': {},
            'subtotal': 0.00,
            'tax': 0.00,
            'coupon': 0.00,
            'grandTotal': 0.00
        }

        total = 0
        return dict(shopping_cart=[], total=0, tax=tax, grandTotal=total + (total * tax), coupon=0)

@app.context_processor
def getServiceCategories():
    return dict(service_categories=[i for i in ServiceCategory.query.all() if i.tag])

@app.context_processor
def getServices():
    return dict(services=[i.__str__() for i in Service.query.all()])

@app.context_processor
def get_product_categories():
    return dict(product_categories=[i for i in Category.query.all() if i.name != 'Products'])

@app.context_processor
def get_hair_categories():
    return dict(hair_categories=[i for i in HairCategory.query.all()])

@app.context_processor
def get_client_token():
    if 'client_token' not in session:
        session['client_token'] = ''
    return dict(client_token=session['client_token'], sb_client_id=app.config.get('SB_CLIENT_ID'))

# @app.context_processor
# @app.shell_context_processor
# def get_popular_products():
#     if Order.query.all():
#         popular_products = db.session.query(Order.product_id,
#         func.count(Order.id).label('qty')
#         ).group_by(Order.product_id
#         ).order_by(desc('qty')).limit(3)
#     else:
#         return dict()
#     return dict(popular_products=[(Product.query.get(i[0]), i[1]) for i in popular_products.all()])

@app.context_processor
def get_current_user():
    # Matches with shop-detail.html for form validation
    if not current_user.is_authenticated and current_user.is_anonymous:
        active_user = False
    else:
        active_user = True
    session['active_user'] = active_user
    return dict(active_user=active_user)

@app.context_processor
def get_env_vars():
    context = {
        'DEVELOPER_NAME': app.config.get('DEVELOPER_NAME'),
        'DEVELOPER_URL': app.config.get('DEVELOPER_URL')
    }
    return context

# @app.context_processor
# def get_popular_products():
#     ordered_products = []
#     for p in Order.query.all():
#         product = Hair.query.get(p.product_id)
#         # print(product.category_id)
#         pattern = Pattern.query.get(product.pattern_id)
#         # print(pattern)
#         category = HairCategory.query.get(product.category_id)
#         # print(category)
#         ordered_products.append(
#             dict(
#                 pattern=product.pattern, 
#                 length=product.length, 
#                 category=category.name, 
#                 image=pattern.image,
#                 price=product.price)
#             )
#     # print(len(ordered_products))
#     # popular_products = sorted(ordered_products, key=lambda x:x.count())
#     # print(popular_products)
#     popular_products = []
#     for i in ordered_products:
#         if (i, ordered_products.count(i)) not in popular_products:
#             popular_products.append((i, ordered_products.count(i)))
#     # print([i[0] for i in sorted(popular_products, key=lambda x:x[1], reverse=True)])
#     return dict(popular_products=[i[0] for i in sorted(popular_products, key=lambda x:x[1], reverse=True)][:5])