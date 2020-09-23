from .import bp as admin
from flask import render_template, redirect, url_for, request
from app.blueprints.shop.models import Coupon

@admin.route('/', methods=['GET'])
def index():
    return render_template('admin/index.html')

@admin.route('/coupons', methods=['GET'])
def coupons():
    return render_template('admin/coupons.html', coupons=Coupon.query.all())

@admin.route('/coupons', methods=['POST'])
def create_coupon():
    if request.method == 'POST':
        print("It works!")
    return redirect(url_for('admin.coupons'))