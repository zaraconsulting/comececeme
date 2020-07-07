from app import create_app, db, cli
from flask import current_app
from app.braintree import gateway

from app.blueprints.reviews.models import Review
from app.blueprints.services.models import ServiceCategory, Service
from app.blueprints.shop.models import Product, ProductReview, Category, Cart, Order, Customer
from app.blueprints.booking.models import Booking

app = create_app()
cli.register(app)

@app.shell_context_processor
def make_context():
    return dict(Booking=Booking, bt_gateway=gateway(current_app), db=db, Review=Review, Customer=Customer, Service=Service, ServiceCategory=ServiceCategory, Product=Product, ProductReview=ProductReview, Category=Category, Cart=Cart, Order=Order)


