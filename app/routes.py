from flask import current_app as app, session
from app.blueprints.shop.models import CartItem, Product

def buildCart(cart_list):
    itemsList = [dict(id=CartItem.query.filter_by(name=i.name).first().id, image=i.image, name=i.name, price=i.price, quantity=[i.name for i in cart_list].count(i.name)) for i in cart_list]
    new_items_list = []
    for i in itemsList:
        if i['name'] not in [i['name'] for i in new_items_list]:
            new_items_list.append(i)
    return new_items_list

@app.context_processor
def inject_cart():
    if 'shopping_cart' not in session:
        session['shopping_cart'] = dict(items = [], total=0)
    session['shopping_cart']['items'] = []
    session['shopping_cart']['items'] = buildCart(CartItem.query.all())
    session['shopping_cart']['total'] = sum([i.price for i in CartItem.query.all()])
    return dict(shopping_cart=session['shopping_cart'])
