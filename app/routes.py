from flask import current_app as app, session, jsonify
from app.blueprints.shop.models import CartItem, Product
from app.blueprints.services.models import Service, ServiceCategory

def buildCart(cart_list):
    itemsList = [dict(id=CartItem.query.filter_by(name=i.name).first().id, prod_id=Product.query.filter_by(name=i.name).first().id, image=i.image, name=i.name, price=i.price, quantity=[i.name for i in cart_list].count(i.name)) for i in cart_list]
    new_items_list = []
    for i in itemsList:
        if i['name'] not in [i['name'] for i in new_items_list]:
            new_items_list.append(i)
    return new_items_list

@app.context_processor
def inject_cart():
    if 'shopping_cart' not in session:
        session['shopping_cart'] = dict(items = [], total=0, tax=.098)
    session['shopping_cart']['items'] = []
    session['shopping_cart']['items'] = buildCart(CartItem.query.all())
    session['shopping_cart']['total'] = sum([i.price for i in CartItem.query.all()])
    session['shopping_cart']['full'] = CartItem.query.all()
    return dict(shopping_cart=session['shopping_cart'])

@app.context_processor
def getServiceCategories():
    return dict(service_categories=[i.name for i in ServiceCategory.query.all()])
    # return dict(service_categories=[jsonify for i in ServiceCategory.query.all()])

@app.context_processor
def getServices():
    return dict(services=[i.__str__() for i in Service.query.all()])

