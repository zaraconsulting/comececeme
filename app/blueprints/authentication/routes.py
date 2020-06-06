from . import bp as authentication
from flask import render_template, redirect, url_for, request
from app.blueprints.shop.models import Customer
# from .forms import LoginForm, RegisterForm
from app import db
from flask_login import login_user, logout_user, login_required, logout_user

@authentication.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        customer = Customer.query.filter_by(email=request.form.get('login-email')).first()
        if customer is not None and customer.check_password_hash(request.form.get('login-password')):
            login_user(customer)
            return redirect(url_for('main.index'))
    return render_template('authentication-login.html')

@authentication.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('authentication.login'))

@authentication.route('/register', methods=['POST'])
def register():
    # user = Customer.query.filter_by(email=request.form.get('email'))
    # print(request.form.get('email'))
    # print(user)
    # if user is not None:
    #     return redirect(url_for('main.index'))
    data = dict(first_name=request.form.get('first_name'), last_name=request.form.get('last_name'), email=request.form.get('email'), password=request.form.get('password'))
    c = Customer()
    c.from_dict(data)
    c.create_customer()
    login_user(c)
    return redirect(url_for('authentication.login'))