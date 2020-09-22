from flask import current_app as app, session, jsonify, request
from flask_login import current_user
from app.blueprints.shop.models import Product, Customer, Order, Category
from app.blueprints.services.models import Service, ServiceCategory
from app.blueprints.hair.models import Hair, HairCategory, Cart, Pattern, HairCategory
from sqlalchemy import func, desc
from app import db

@app.context_processor
def inject_cart():
    if 'coupon' not in session:
        session['coupon'] = None
    try:
        items = []
        for i in current_user.cart.all():
            data = dict(bundle_length=Hair.query.get(i.product_id).bundle_length, length=Hair.query.get(i.product_id).length, category=HairCategory.query.get(Hair.query.get(i.product_id).category_id).name, pattern=Hair.query.get(i.product_id).pattern, prod_id=Hair.query.get(i.product_id).id, name=Hair.query.get(i.product_id).pattern, image=Pattern.query.filter_by(name=Hair.query.get(i.product_id).pattern).first().image, price=Hair.query.get(i.product_id).price, quantity=len(Cart.query.filter_by(product_id=i.product_id).all()))
            if data not in items:
                items.append(data)
        tax = .098
        total = sum([Hair.query.filter_by(id=i.product_id).first().price for i in current_user.cart.all()])
        if session.get('coupon') is not None:
            # print("works")
            grandTotal = total + (total * tax) - (total * session.get('coupon')['discount'])
        else: 
            grandTotal = total + (total * tax)
        print(grandTotal)
        cart_dict = dict(shopping_cart=items, total=total, tax=tax, grandTotal=grandTotal, fullCart=current_user.cart.all(), coupon=session.get('coupon'))
        # print(cart_dict)
        return cart_dict
    except:
        tax = .098
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
def getClientToken():
    if 'client_token' not in session:
        session['client_token'] = ''
    return dict(client_token=session['client_token'])

@app.context_processor
@app.shell_context_processor
def getPopularProducts():
    if Order.query.all():
        popular_products = db.session.query(Order.product_id,
        func.count(Order.id).label('qty')
        ).group_by(Order.product_id
        ).order_by(desc('qty')).limit(3)
    else:
        return dict()
    return dict(popular_products=[(Product.query.get(i[0]), i[1]) for i in popular_products.all()])

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
def get_popular_products():
    ordered_products = []
    for p in Order.query.all():
        product = Hair.query.get(p.product_id)
        # print(product.category_id)
        pattern = Pattern.query.get(product.pattern_id)
        # print(pattern)
        category = HairCategory.query.get(product.category_id)
        # print(category)
        ordered_products.append(
            dict(
                pattern=product.pattern, 
                category=category.name, 
                image=pattern.image,
                price=product.price)
            )
    # print(len(ordered_products))
    # popular_products = sorted(ordered_products, key=lambda x:x.count())
    # print(popular_products)
    popular_products = []
    for i in ordered_products:
        if (i, ordered_products.count(i)) not in popular_products:
            popular_products.append((i, ordered_products.count(i)))
    # print([i[0] for i in sorted(popular_products, key=lambda x:x[1], reverse=True)])
    return dict(popular_products=[i[0] for i in sorted(popular_products, key=lambda x:x[1], reverse=True)])