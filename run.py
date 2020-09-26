from app import create_app, db, cli
from flask import current_app
from app.braintree import gateway

from app.models import Review, ServiceCategory, Service, Product, ProductReview, Category, Order, Customer, Coupon, Booking, Gallery, HairCategory, Hair, Pattern, Cart, Faqs, Account, Role

app = create_app()
cli.register(app)

@app.shell_context_processor
def make_context():
    return dict(Faqs=Faqs, Gallery=Gallery, Booking=Booking, Role=Role, Account=Account, bt_gateway=gateway(current_app), db=db, Review=Review, Customer=Customer, Service=Service, ServiceCategory=ServiceCategory, Product=Product, ProductReview=ProductReview, Category=Category, Cart=Cart, Order=Order, Hair=Hair, HairCategory=HairCategory, Pattern=Pattern, Coupon=Coupon)


