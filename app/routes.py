from flask import current_app as app, session, jsonify, request
from flask_login import current_user
from app.blueprints.shop.models import Product, Customer, Cart
from app.blueprints.services.models import Service, ServiceCategory
from app import db

def buildCart(cart_list):
    # itemsList = [dict(id=CartItem.query.filter_by(name=i.name).first().id, prod_id=Product.query.filter_by(name=i.name).first().id, image=i.image, name=i.name, price=i.price, quantity=[i.name for i in cart_list].count(i.name)) for i in cart_list]
    new_items_list = []
    for i in itemsList:
        if i['name'] not in [i['name'] for i in new_items_list]:
            new_items_list.append(i)
    return new_items_list

@app.context_processor
def inject_cart():
    # if 'shopping_cart' not in session:
    #     session['shopping_cart'] = []
        # [db.session.delete(i) for i in CartItem.query.all()]
    #     session['shopping_cart'] = dict(items = [], total=0, tax=.098)dict(name=Product.query.get(i.productId).name, image=Product.query.get(i.productId).image, price=Product.query.get(i.productId).price) for i in current_user.cart.all()
    # session['shopping_cart']['items'] = []
    # session['shopping_cart']['total'] = sum([i.price for i in CartItem.query.all()])
    # session['shopping_cart']['items'] = buildCart(CartItem.query.all())
    # session['shopping_cart']['full'] = CartItem.query.all()
    # if CartItem.query.all():
        # session['shopping_cart']['items'] = buildCart(CartItem.query.all())
        # session['shopping_cart']['full'] = CartItem.query.all()
    if Cart.query.filter_by(customerId=current_user.id).first() is not None:
        items = []
        for i in current_user.cart.all():
            data = dict(prod_id=Product.query.get(i.productId).id, name=Product.query.get(i.productId).name, image=Product.query.get(i.productId).image, price=Product.query.get(i.productId).price, quantity=len(Cart.query.filter_by(productId=i.productId).all()))
            if data not in items:
                items.append(data)
        print(items)
        tax = .098
        total = sum([Product.query.filter_by(id=i.productId).first().price for i in current_user.cart.all()])
        return dict(shopping_cart=items, total=total, tax=tax, grandTotal = total + (total * tax))

@app.context_processor
def getServiceCategories():
    return dict(service_categories=[i.name for i in ServiceCategory.query.all()])
    # return dict(service_categories=[jsonify for i in ServiceCategory.query.all()])

@app.context_processor
def getServices():
    return dict(services=[i.__str__() for i in Service.query.all()])

@app.route('/hey/you', methods=['GET', 'POST'])
def heyYou():
    if request.method == 'POST':
        # you = request.get_json()
        you = request.form.get('you')
        return you
    print(request.args)
    return "Hello, there"
    
