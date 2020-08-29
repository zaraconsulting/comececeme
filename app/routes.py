from flask import current_app as app, session, jsonify, request
from flask_login import current_user
from app.blueprints.shop.models import Product, Customer, Cart, Order, Category
from app.blueprints.services.models import Service, ServiceCategory
from app.blueprints.hair.models import Hair, HairCategory
from sqlalchemy import func, desc
from app import db

@app.context_processor
def inject_cart():
    try:
        items = []
        for i in current_user.cart.all():
            data = dict(prod_id=Product.query.get(i.productId).id, name=Product.query.get(i.productId).name, image=Product.query.get(
                i.productId).image, price=Product.query.get(i.productId).price, quantity=len(Cart.query.filter_by(productId=i.productId).all()))
            if data not in items:
                items.append(data)
        tax = .098
        total = sum([Product.query.filter_by(id=i.productId).first().price for i in current_user.cart.all()])
        return dict(shopping_cart=items, total=total, tax=tax, grandTotal=total + (total * tax), fullCart=current_user.cart.all())
    except:
        tax = .098
        total = 0
        return dict(shopping_cart=[], total=0, tax=tax, grandTotal=total + (total * tax))

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
def sayHello():
    return dict(statement="Hello")