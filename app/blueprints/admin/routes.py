from .import bp as admin
from flask import render_template, redirect, url_for, request, flash, session
from app.blueprints.shop.models import Coupon
from app.blueprints.account.models import Account, Role
from .forms import AdminUserForm, AdminLoginForm, AdminEditUserForm
from flask_login import current_user, login_user, logout_user
from app import db


@admin.route('/', methods=['GET'])
def index():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    return render_template('admin/index.html')

@admin.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('admin.index'))
    form = AdminLoginForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        user = Account.query.filter_by(email=email).first()
        if user is None or not user.check_password_hash(password):
            print("Wrong User")
            flash('Either an incorrect email or password was given. Try again.', 'danger')
            return redirect(url_for('admin.login'))
        login_user(user, remember=form.remember_me.data)
        flash('You have logged in successfully', 'success')
        return redirect(url_for('admin.index'))
    return render_template('admin/login.html', form=form)

@admin.route('/logout')
def logout():
    logout_user()
    flash('You have logged in successfully', 'info')
    return redirect(url_for('admin.index'))

@admin.route('/coupons', methods=['GET'])
def coupons():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    return render_template('admin/coupons.html', coupons=Coupon.query.all())

@admin.route('/coupons', methods=['POST'])
def create_coupon():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    if request.method == 'POST':
        coupon = Coupon()
        data = dict(text=request.form.get('coupon_code'), discount=request.form.get('discount'))
        coupon.from_dict(data)
        coupon.create_coupon()
        flash('Coupon created successfully', 'success')
    return redirect(url_for('admin.coupons'))

@admin.route('/coupons/delete')
def delete_coupon():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    coupon = Coupon.query.get(_id)
    coupon.delete_coupon()
    flash('Coupon deleted successfully', 'info')
    return redirect(url_for('admin.coupons'))

@admin.route('/users', methods=['GET', 'POST'])
def users():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminUserForm()
    if current_user.is_admin and current_user.is_authenticated:
        form.role.choices = [(i.id, i.name) for i in Role.query.order_by(Role.name).all()]
    else:
        form.role.choices = [(i.id, i.name) for i in Role.query.order_by(Role.name).all() if i.name != 'Admin']
    # print(form.role.choices)
    if form.validate_on_submit():
        user = Account()
        data = {
            'email': form.email.data, 
            'first_name': form.first_name.data, 
            'last_name': form.last_name.data, 
            'password': form.email.data
        }
        user.from_dict(data)
        user.role_id = Role.query.get(form.role.data).id
        # print(Role.query.all())
        # print(Role.query.filter_by(name=form.role.data).first().id)
        if Role.query.get(form.role.data).name == 'Admin':
            user.is_admin = 1
        user.set_password_hash(user.password)
            # 'role_id': Role.query.filter_by(name=form.role.data.title()).first().id,
        user.create_account()
        flash('User created successfully', 'success')
        return redirect(url_for('admin.users'))
    return render_template('admin/users.html', users=[i for i in Account.query.order_by(Account.last_name).all() if i != current_user], form=form)

@admin.route('/user/edit', methods=['GET', 'POST'])
def edit_user():
    u = Account.query.get(request.args.get('id'))
    form = AdminEditUserForm()
    form.role.choices = [(i.id, i.name) for i in Role.query.order_by(Role.name).all() if i.name != 'Admin']
    # form.role.data = u.role_id
    form.is_admin.data = u.is_admin
    print(u.role_id)

    if form.validate_on_submit():
        data = dict(first_name=form.first_name.data, last_name=form.last_name.data, email=form.email.data)
        print(form.role.data)
        u.role_id = form.role.data
        print(u.role_id)
        u.is_admin = form.is_admin.data
        u.from_dict(data)
        db.session.commit()
        flash('Edited user successfully', 'info')
        return redirect(url_for('admin.users'))
    context = {
        'user': u,
        'form': form
    }
    return render_template('admin/users-edit.html', **context)

@admin.route('/user/delete')
def delete_account():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    user = Account.query.get(_id)
    user.delete_account()
    flash('User deleted successfully', 'info')
    return redirect(url_for('admin.users'))

# @admin.route('/users', methods=['POST'])
# def create_user():
#     if request.method == 'POST':
#         user = Account()
#         data = {
#             'email': request.form.get('email'), 
#             'password': request.form.get('email')
#         }
#         user.from_dict(data)
#         user.role_id = Role.query.filter_by(name=request.form.get('role').title()).first().id
#         print(Role.query.all())
#         print(Role.query.filter_by(name=request.form.get('role')).first().id)
#         if request.form.get('is_admin') is not None:
#             user.is_admin = request.form.get('is_admin')
#         user.set_password_hash(user.password)
#             # 'role_id': Role.query.filter_by(name=request.form.get('role').title()).first().id,
#         user.create_user()
#         flash('User created successfully', 'success')
#     return redirect(url_for('admin.users'))

@admin.route('/roles', methods=['GET'])
def roles():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    return render_template('admin/roles.html', roles=Role.query.all())

@admin.route('/roles', methods=['POST'])
def create_role():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    if request.method == 'POST':
        role = Role()
        data = dict(name=request.form.get('name'))
        role.from_dict(data)
        role.create_role()
        flash('Role created successfully', 'success')
    return redirect(url_for('admin.roles'))

@admin.route('/roles/delete')
def delete_role():
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    role = Role.query.get(_id)
    role.delete_role()
    flash('Coupon deleted successfully', 'info')
    return redirect(url_for('admin.roles'))