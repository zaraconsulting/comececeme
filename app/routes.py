from flask import current_app as app, session, jsonify, request
from flask_login import current_user
from app.blueprints.shop.models import Product, Customer, Cart
from app.blueprints.services.models import Service, ServiceCategory
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
    return dict(service_categories=[i.name for i in ServiceCategory.query.all()])

@app.context_processor
def getServices():
    return dict(services=[i.__str__() for i in Service.query.all()])

@app.context_processor
def getClientToken():
    if 'client_token' not in session:
        session['client_token'] = ''
    return dict(client_token=session['client_token'])