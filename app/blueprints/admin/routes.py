from .import bp as admin
from flask import render_template, redirect, url_for, request, flash
from app.blueprints.shop.models import Coupon
from app.blueprints.account.models import Account, Role
from .forms import AdminUserForm

@admin.route('/', methods=['GET'])
def index():
    return render_template('admin/index.html')

@admin.route('/coupons', methods=['GET'])
def coupons():
    return render_template('admin/coupons.html', coupons=Coupon.query.all())

@admin.route('/coupons', methods=['POST'])
def create_coupon():
    if request.method == 'POST':
        coupon = Coupon()
        data = dict(text=request.form.get('coupon_code'), discount=request.form.get('discount'))
        coupon.from_dict(data)
        coupon.create_coupon()
        flash('Coupon created successfully', 'success')
    return redirect(url_for('admin.coupons'))

@admin.route('/coupons/delete')
def delete_coupon():
    _id = int(request.args.get('id'))
    coupon = Coupon.query.get(_id)
    coupon.delete_coupon()
    flash('Coupon deleted successfully', 'info')
    return redirect(url_for('admin.coupons'))

@admin.route('/users', methods=['GET', 'POST'])
def users():
    form = AdminUserForm()
    form.role.choices = [(i.id, i.name) for i in Role.query.all()]
    # print(form.role.choices)
    if form.validate_on_submit():
        user = Account()
        data = {
            'email': form.email.data, 
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
    return render_template('admin/users.html', users=Account.query.all(), form=form)

@admin.route('/user/delete')
def delete_account():
    _id = int(request.args.get('id'))
    user = Account.query.get(_id)
    user.delete_account()
    flash('User deleted successfully', 'info')
    return redirect(url_for('admin.users'))

# @admin.route('/users', methods=['POST'])
# def create_user():
#     if request.method == 'POST':
        # user = Account()
        # data = {
        #     'email': request.form.get('email'), 
        #     'password': request.form.get('email')
        # }
        # user.from_dict(data)
        # user.role_id = Role.query.filter_by(name=request.form.get('role').title()).first().id
        # print(Role.query.all())
        # print(Role.query.filter_by(name=request.form.get('role')).first().id)
        # if request.form.get('is_admin') is not None:
        #     user.is_admin = request.form.get('is_admin')
        # user.set_password_hash(user.password)
        #     # 'role_id': Role.query.filter_by(name=request.form.get('role').title()).first().id,
        # user.create_user()
        # flash('User created successfully', 'success')
    # return redirect(url_for('admin.users'))

@admin.route('/roles', methods=['GET'])
def roles():
    return render_template('admin/roles.html', roles=Role.query.all())

@admin.route('/roles', methods=['POST'])
def create_role():
    if request.method == 'POST':
        role = Role()
        data = dict(name=request.form.get('name'))
        role.from_dict(data)
        role.create_role()
        flash('Role created successfully', 'success')
    return redirect(url_for('admin.roles'))

@admin.route('/roles/delete')
def delete_role():
    _id = int(request.args.get('id'))
    role = Role.query.get(_id)
    role.delete_role()
    flash('Coupon deleted successfully', 'info')
    return redirect(url_for('admin.roles'))