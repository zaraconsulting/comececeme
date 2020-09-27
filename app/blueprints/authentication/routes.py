from . import bp as authentication
from flask import current_app, render_template, redirect, url_for, request, flash
from app.models import Customer
from app import db
from flask_login import login_user, logout_user, login_required, logout_user
from app.braintree import gateway
from flask_login import current_user

@authentication.route('/login', methods=['GET', 'POST'])
def login():
    active_user = False if request.args.get('active_user') == 'False' else True
    is_logged_out = True if request.args.get('is_logged_out') else False
    # print(is_logged_out)
    
    if current_user.is_authenticated:
        return redirect(url_for('main.index'))
    else:
        if current_user is None or not active_user:
            flash('You must login to add items', 'm-warning')
    if request.method == 'POST':
        # Test
        customer = Customer.query.filter_by(email=request.form.get('login-email').lower()).first()
        if customer is not None and customer.check_password_hash(request.form.get('login-password')):
            login_user(customer)
            if not is_logged_out:
                flash('You have logged in successfully', 'success')
            return redirect(url_for('main.index'))
        else:
            flash("You have used either an incorrect email or password. Try again.", "m-warning")
            return redirect(url_for('authentication.login'))
    return render_template('authentication-login.html')

@authentication.route('/logout')
def logout():
    logout_user()
    flash('You have logged out successfully', 'm-info')
    return redirect(url_for('authentication.login', is_logged_out=True))

@authentication.route('/register', methods=['POST'])
def register():
    # print("Before try")
    try:
        user = Customer.query.filter_by(email=request.form.get('email').lower()).first()
        if user is not None:
            # print("Found user")
            flash('That email address has already been used. Try again.', 'm-warning')
            return redirect(url_for('authentication.login'))
        bt_gateway = gateway(current_app)
        # Create customer in Braintree
        result = bt_gateway.customer.create({
            'first_name': request.form.get('first_name'),
            'last_name': request.form.get('last_name')
        })
        data = dict(id=result.customer.id, first_name=request.form.get('first_name'), last_name=request.form.get(
            'last_name'), email=request.form.get('email').lower(), password=request.form.get('password'))
        c = Customer()
        c.from_dict(data)
        c.create_customer()
        flash("You have registered succcessfully. Log in!", 'm-success')
        return redirect(url_for('authentication.login'))
    except:
        flash("There was a registration error. Try again later or contact the system administrator", 'm-danger')
        return redirect(url_for('authentication.login'))
