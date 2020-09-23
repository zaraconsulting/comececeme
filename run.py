from app import create_app, db, cli
from flask import current_app
from app.braintree import gateway

from app.blueprints.reviews.models import Review
from app.blueprints.services.models import ServiceCategory, Service
from app.blueprints.shop.models import Product, ProductReview, Category, Order, Customer, Coupon
from app.blueprints.booking.models import Booking
from app.blueprints.gallery.models import Gallery
from app.blueprints.hair.models import HairCategory, Hair, Pattern, Cart
from app.blueprints.faqs.models import Faqs
from app.blueprints.account.models import Account, Role

app = create_app()
cli.register(app)

@app.shell_context_processor
def make_context():
    return dict(Faqs=Faqs, Gallery=Gallery, Booking=Booking, Role=Role, Account=Account, bt_gateway=gateway(current_app), db=db, Review=Review, Customer=Customer, Service=Service, ServiceCategory=ServiceCategory, Product=Product, ProductReview=ProductReview, Category=Category, Cart=Cart, Order=Order, Hair=Hair, HairCategory=HairCategory, Pattern=Pattern, Coupon=Coupon)


