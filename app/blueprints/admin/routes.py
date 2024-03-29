from .import bp as admin
from flask import render_template, redirect, url_for, request, flash
from app.models import Hair, Customer, Coupon, HairCategory, Pattern, Account, Role, HairTip, Order, ProductCategory, Product
from .forms import \
    AdminEditBeautyCategoryForm, AdminEditBeautyProductForm, AdminUserForm, AdminLoginForm, AdminEditUserForm, AdminEditUserForm, AdminCreateProductForm, AdminResetPasswordRequestForm, \
    AdminResetPasswordForm, AdminCreatePatternForm, AdminEditPatternForm, AdminEditProductForm, AdminCreateHairTipForm, AdminEditHairTipForm, \
    AdminCreateCategoryForm, AdminEditCategoryForm, AdminCreateWigForm, AdminEditWigForm, AdminCreateBeautyProductForm, AdminCreateBeautyCategoryForm
from flask_login import current_user, login_user, logout_user
from app import db
from .email import send_password_reset_email
from cloudinary.uploader import upload
from app.tinypng import tinify
from config import basedir
import os

@admin.route('/', methods=['GET'])
def index():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    else:
        customer = Customer.query.get(current_user.id)
        if customer is not None:
            logout_user()
            return redirect(url_for('admin.login'))
    return render_template('admin/index.html')

@admin.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('admin.index'))
    form = AdminLoginForm()
    if form.validate_on_submit():
        email = form.email.data.lower()
        password = form.password.data

        user = Account.query.filter_by(email=email).first()
        if user is None or not user.check_password(password):
            flash('You have entered either an incorrect email or password. Try again.', 'danger')
            return redirect(url_for('admin.login'))
        login_user(user, remember=form.remember_me.data)
        flash('You have logged in successfully', 'success')
        return redirect(url_for('admin.index'))
    return render_template('admin/authentication/login.html', form=form)

@admin.route('/logout')
def logout():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    logout_user()
    flash('You have logged out successfully', 'info')
    return redirect(url_for('admin.index'))

@admin.route('/coupons', methods=['GET'])
def coupons():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    return render_template('admin/coupons.html', coupons=Coupon.query.all())

@admin.route('/coupons', methods=['POST'])
def create_coupon():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
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
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    coupon = Coupon.query.get(_id)
    coupon.delete_coupon()
    flash('Coupon deleted successfully', 'info')
    return redirect(url_for('admin.coupons'))

@admin.route('/users', methods=['GET', 'POST'])
def users():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
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
            'email': form.email.data.lower(), 
            'first_name': form.first_name.data, 
            'last_name': form.last_name.data, 
            'password': form.email.data.lower()
        }
        user.from_dict(data)
        user.role_id = Role.query.get(form.role.data).id
        # print(Role.query.all())
        # print(Role.query.filter_by(name=form.role.data).first().id)
        if Role.query.get(form.role.data).name == 'Admin':
            user.is_admin = 1
        # print(data)
        user.set_password(user.password)
            # 'role_id': Role.query.filter_by(name=form.role.data.title()).first().id,
        user.create_account()
        flash('User created successfully', 'success')
        return redirect(url_for('admin.users'))
    if current_user.is_admin:
        users = [i for i in Account.query.all() if i != current_user]
    elif current_user.role.name == 'Owner':
        # print("owner")
        users = [i for i in Account.query.all() if i != current_user and not i.is_admin]
    else:
        users = [i for i in Account.query.all() if i != current_user and not i.is_admin]
        # print(users)
    # users = [i for i in Account.query.order_by(Account.last_name).all() if i != current_user]
    return render_template('admin/users.html', users=sorted(users, key=lambda x:x.role.rank), form=form)

@admin.route('/user/edit', methods=['GET', 'POST'])
def edit_user():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    u = Account.query.get(request.args.get('id'))
    form = AdminEditUserForm()
    form.role.choices = [(i.id, i.name) for i in Role.query.order_by(Role.name).all() if i.name != 'Admin']
    # print(u.role_id)

    if form.validate_on_submit():
        data = dict(first_name=form.first_name.data, last_name=form.last_name.data, email=form.email.data.lower())
        # print(form.role.data)
        u.role_id = form.role.data
        # print(u.role_id)
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
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
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
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    # print(current_user.is_admin)
    if current_user.is_admin:
        roles = Role.query.all()
    else:
        roles = [i for i in Role.query.all() if not i.name == 'Admin']
    return render_template('admin/roles.html', roles=sorted(roles, key=lambda x:x.rank))

@admin.route('/roles', methods=['POST'])
def create_role():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
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
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    role = Role.query.get(_id)
    role.delete_role()
    flash('Coupon deleted successfully', 'info')
    return redirect(url_for('admin.roles'))

@admin.route('/hair/categories', methods=['GET', 'POST'])
def hair_categories():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminCreateCategoryForm()
    if form.validate_on_submit():
        category = HairCategory()
        data = {
            'name': form.name.data.title(),
            'display_name': form.display_name.data.title() if form.display_name.data.title() else form.name.data.title(),
            'description': form.description.data,
            'image': None
        }
        # print(data)
        # create temp folder if it doesn't exist
        if not os.path.exists(f"{basedir}/app/temp"):
            os.makedirs(f"{basedir}/app/temp")
        # save file to temp folder
        file = request.files.get('image')
        file.save(f"{basedir}/app/temp/{file.filename}")

        # compress via TinyPNG
        with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
            source_data = source.read()
            result_data = tinify.from_buffer(source_data).to_buffer()
            result = upload(result_data)
            
            # remove image from temp folder
            os.remove(f"{basedir}/app/temp/{file.filename}")
            data.update({'image': result.get('url')})
        category.from_dict(data)
        category.create_hair_category()
        flash('Hair Category created successfully', 'success')
        return redirect(url_for('admin.hair_categories'))
    return render_template('admin/hair/categories.html', categories=HairCategory.query.order_by(HairCategory.name).all(), form=form)

@admin.route('/hair/category/edit', methods=['GET', 'POST'])
def edit_hair_category():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    c = HairCategory.query.get(request.args.get('id'))
    form = AdminEditCategoryForm()
    if form.validate_on_submit():
        c = HairCategory.query.filter_by(name=form.name.data).first()
        # create temp folder if it doesn't exist
        if not os.path.exists(f"{basedir}/app/temp"):
            os.makedirs(f"{basedir}/app/temp")
        # save file to temp folder
        file = request.files.get('image')
        file.save(f"{basedir}/app/temp/{file.filename}")

        # compress via TinyPNG
        with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
            source_data = source.read()
            result_data = tinify.from_buffer(source_data).to_buffer()
            result = upload(result_data)
            
            # remove image from temp folder
            os.remove(f"{basedir}/app/temp/{file.filename}")
        data = {
            'name': c.name,
            'description': form.description.data,
            'display_name': form.display_name.data,
            'image': result['url'] if request.files.get('image') else c.image,
        }
        c.from_dict(data)
        db.session.commit()
        flash('Edited category successfully', 'info')
        return redirect(url_for('admin.hair_categories'))
    context = {
        'category': c,
        'form': form
    }
    return render_template('admin/hair/categories-edit.html', **context)

@admin.route('/hair/category/delete')
def delete_hair_category():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    category = HairCategory.query.get(_id)
    category.delete_hair_category()
    flash('Hair Category deleted successfully', 'danger')
    return redirect(url_for('admin.hair_categories'))

@admin.route('/hair/products', methods=['GET', 'POST'])
def hair_products():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminCreateProductForm()
    form.pattern.choices = [(i.id, i.name) for i in Pattern.query.order_by(Pattern.name).all()]
    form.category.choices = [(i.id, i.name) for i in HairCategory.query.order_by(HairCategory.name).all() if i.name != 'Wigs']
    form.is_viewable.choices = [(1, True), (0, False)]

    if request.method == 'POST':
        product = Hair()
        data = {
            'pattern': Pattern.query.get(form.pattern.data).display_name, 
            'price': form.price.data,
            'category_id': HairCategory.query.get(int(form.category.data)).id,
            'is_viewable': form.is_viewable.data
        }
        if form.length.data:
            data.update({ 'length': form.length.data })
        elif form.bundle_length.data:
            data.update({ 'bundle_length': form.bundle_length.data })

        # print(data)

        product.from_dict(data)
        product.pattern_id = Pattern.query.get(form.pattern.data).id
        product.category_id = HairCategory.query.get(form.category.data).id
        product.bundle_length = form.bundle_length.data or ''
        # print(product)
        product.create_hair_product()
        flash('Hair Product created successfully', 'success')
        return redirect(url_for('admin.hair_products'))
    return render_template('admin/hair/products.html', products=[i for i in Hair.query.order_by(Hair.pattern).all() if i.category.name != 'Wigs'], form=form)

@admin.route('/hair/product/edit', methods=['GET', 'POST'])
def edit_hair_product():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    p = Hair.query.get(request.args.get('id'))
    form = AdminEditProductForm()
    form.pattern.choices = [(i.id, i.name) for i in Pattern.query.order_by(Pattern.name).all()]
    form.category.choices = [(i.id, i.name) for i in HairCategory.query.order_by(HairCategory.name).all()]
    form.is_viewable.choices = [(1, True), (0, False)]
    
    if request.method == 'POST':
        # print(request.form)
        data = {
            'is_viewable': form.is_viewable.data,
            'pattern': Pattern.query.get(form.pattern.data).display_name, 
            'price': form.price.data, 
            'category_id': HairCategory.query.get(int(request.form.get('category'))).id,
        }
        if form.length.data:
            data.update({ 'length': form.length.data })
        elif form.bundle_length.data:
            data.update({ 'bundle_length': form.bundle_length.data })
        elif form.is_viewable.data:
            data.update({ 'is_viewable': form.is_viewable.data })

        p.from_dict(data)
        p.pattern_id = Pattern.query.get(form.pattern.data).id
        p.category_id = HairCategory.query.get(form.category.data).id
        db.session.commit()
        flash('Edited product successfully', 'info')
        return redirect(url_for('admin.hair_products'))
    context = {
        'product': p,
        'form': form
    }
    return render_template('admin/hair/products-edit.html', **context)

@admin.route('/hair/product/delete')
def delete_hair_product():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    product = Hair.query.get(_id)
    product.delete_hair_product()
    flash('Product deleted successfully', 'info')
    return redirect(url_for('admin.hair_products'))

@admin.route('/reset_password_request', methods=['GET', 'POST'])
def reset_password_request():
    if current_user.is_authenticated:
        return redirect(url_for('admin.index'))
    form = AdminResetPasswordRequestForm()
    if form.validate_on_submit():
        user = Account.query.filter_by(email=form.email.data.lower()).first()
        if not user:
            flash('Account holder with that email address was not found', 'warning')
            return redirect(url_for('admin.reset_password_request'))
        if user:
            send_password_reset_email(user)
            flash("Check your email for instructions to reset your password", 'primary')
            return redirect(url_for('admin.login'))
    return render_template('admin/authentication/reset_password_request.html', title='Reset Password', form=form)

@admin.route('/reset_password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    if current_user.is_authenticated:
        return redirect(url_for('admin.index'))
    
    user = Account.verify_reset_password_token(token)
    # print(user)
    if not user:
        flash('Your password reset token is probably expired. Follow steps for resetting password again.', 'warning')
        return redirect(url_for('admin.login'))
    form = AdminResetPasswordForm()
    if form.validate_on_submit():
        # print(form.password.data)
        user.set_password(form.password.data)
        db.session.commit()
        flash('Your password has been reset', 'success')
        return redirect(url_for('admin.login'))
    return render_template('admin/reset_password.html', user=user, form=form)


####################################
# PRODUCT - BEAUTY
####################################
@admin.route('/beauty/categories', methods=['GET', 'POST'])
def beauty_categories():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminCreateBeautyCategoryForm()
    if form.validate_on_submit():
        category = ProductCategory()
        data = {
            'name': form.name.data.title(),
        }
        category.from_dict(data)
        category.create_product_category()
        flash('Beauty Category created successfully', 'success')
        return redirect(url_for('admin.beauty_categories'))
    return render_template('admin/beauty/categories.html', categories=ProductCategory.query.order_by(ProductCategory.name).all(), form=form)

@admin.route('/beauty/category/edit', methods=['GET', 'POST'])
def edit_beauty_category():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    c = ProductCategory.query.get(request.args.get('id'))
    form = AdminEditBeautyCategoryForm()
    if request.method == 'POST':
        c = ProductCategory.query.get(request.form.get('category_id'))
        data = {
            'name': form.name.data,
        }
        c.from_dict(data)
        db.session.commit()
        flash('Edited Product Category successfully', 'info')
        return redirect(url_for('admin.beauty_categories'))
    context = {
        'category': c,
        'form': form
    }
    return render_template('admin/beauty/categories-edit.html', **context)

@admin.route('/beauty/category/delete')
def delete_beauty_category():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    category = ProductCategory.query.get(_id)
    category.delete_product_category()
    flash('Product Category deleted successfully', 'danger')
    return redirect(url_for('admin.beauty_categories'))

@admin.route('/beauty/products', methods=['GET', 'POST'])
def beauty_products():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminCreateBeautyProductForm()
    form.category.choices = [(i.id, i.name) for i in ProductCategory.query.order_by(ProductCategory.name).all()]
    form.is_viewable.choices = [(1, True), (0, False)]
    form.in_stock.choices = [(1, True), (0, False)]

    if request.method == 'POST':
        if not os.path.exists(f"{basedir}/app/temp"):
            os.makedirs(f"{basedir}/app/temp")
        # save file to temp folder
        file = request.files.get('image')
        file.save(f"{basedir}/app/temp/{file.filename}")

        # compress via TinyPNG
        with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
            source_data = source.read()
            result_data = tinify.from_buffer(source_data).to_buffer()
            result = upload(result_data)

            # remove image from temp folder
            os.remove(f"{basedir}/app/temp/{file.filename}")
        product = Product()
        data = {
            'is_viewable': form.is_viewable.data,
            'category_id': ProductCategory.query.get(int(form.category.data)).id,
            'in_stock': form.in_stock.data,
            'name': form.name.data,
            'price': form.price.data,
            'description': form.description.data,
            'size': form.size.data,
            'image': result['url'],
        }

        # print(data)

        product.from_dict(data)
        product.create_product()
        flash('Beauty Product created successfully', 'success')
        return redirect(url_for('admin.beauty_products'))
    context = {
        'products': [i.to_dict() for i in Product.query.all()],
        'form': form
    }
    return render_template('admin/beauty/products.html', **context)

@admin.route('/beauty/product/edit', methods=['GET', 'POST'])
def edit_beauty_product():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    p = Product.query.get(request.args.get('id'))
    form = AdminEditBeautyProductForm()
    form.category.choices = [(i.id, i.name) for i in ProductCategory.query.order_by(ProductCategory.name).all()]
    form.is_viewable.choices = [(1, True), (0, False)]
    form.in_stock.choices = [(1, True), (0, False)]

    if request.method == 'POST':
        p = Product.query.get(request.form.get('product_id'))
        if request.files.get('image'):
            # create temp folder if it doesn't exist
            if not os.path.exists(f"{basedir}/app/temp"):
                os.makedirs(f"{basedir}/app/temp")
            # save file to temp folder
            file = request.files.get('image')
            file.save(f"{basedir}/app/temp/{file.filename}")

            # compress via TinyPNG
            with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
                source_data = source.read()
                result_data = tinify.from_buffer(source_data).to_buffer()
                result = upload(result_data)

                # remove image from temp folder
                os.remove(f"{basedir}/app/temp/{file.filename}")
        data = {
            'is_viewable': form.is_viewable.data,
            'category_id': ProductCategory.query.get(int(form.category.data)).id,
            'in_stock': form.in_stock.data,
            'name': form.name.data,
            'price': form.price.data,
            'description': form.description.data,
            'size': form.size.data,
            'price': form.price.data, 
        }
        if request.files.get('image'):
            data['image'] = result['url']
        else:
            data['image'] = p.image
        if form.is_viewable.data:
            data.update({ 'is_viewable': form.is_viewable.data })

        p.from_dict(data)
        db.session.commit()
        flash('Edited product successfully', 'info')
        return redirect(url_for('admin.beauty_products'))
    context = {
        'product': p.to_dict(),
        'form': form
    }
    print(p.to_dict())
    return render_template('admin/beauty/products-edit.html', **context)

@admin.route('/beauty/product/delete')
def delete_beauty_product():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    product = Product.query.get(_id)
    product.delete_product()
    flash('Beauty Product deleted successfully', 'info')
    return redirect(url_for('admin.beauty_products'))
####################################
# PRODUCT - BEAUTY
####################################

####################################
# PATTERNS
####################################
@admin.route('hair/patterns', methods=['GET', 'POST'])
def hair_patterns():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminCreatePatternForm()
    if form.validate_on_submit():
        # create temp folder if it doesn't exist
        if not os.path.exists(f"{basedir}/app/temp"):
            os.makedirs(f"{basedir}/app/temp")
        # save file to temp folder
        file = request.files.get('image')
        file.save(f"{basedir}/app/temp/{file.filename}")

        # compress via TinyPNG
        with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
            source_data = source.read()
            result_data = tinify.from_buffer(source_data).to_buffer()
            result = upload(result_data)
            
            # remove image from temp folder
            os.remove(f"{basedir}/app/temp/{file.filename}")
        pattern = Pattern()
        data = {
            'name': form.name.data.title(),
            'display_name': form.display_name.data.title() if form.display_name.data.title() else form.name.data.title(),
            'image': result['url'],
        }
        pattern.from_dict(data)
        pattern.create_hair_pattern()
        flash('Pattern created successfully', 'success')
        return redirect(url_for('admin.hair_patterns'))
    return render_template('admin/hair/patterns.html', patterns=Pattern.query.all(), form=form)

@admin.route('/hair/pattern/edit', methods=['GET', 'POST'])
def edit_hair_pattern():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    p = Pattern.query.get(request.args.get('id'))
    form = AdminEditPatternForm()
    form.name.choices = [(i.id, i.name) for i in Pattern.query.order_by(Pattern.name).all()]
    if form.validate_on_submit():
        p = Pattern.query.get(form.name.data)
        if request.files.get('image'):
            # create temp folder if it doesn't exist
            if not os.path.exists(f"{basedir}/app/temp"):
                os.makedirs(f"{basedir}/app/temp")
            # save file to temp folder
            file = request.files.get('image')
            file.save(f"{basedir}/app/temp/{file.filename}")

            # compress via TinyPNG
            with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
                source_data = source.read()
                result_data = tinify.from_buffer(source_data).to_buffer()
                result = upload(result_data)

                # remove image from temp folder
                os.remove(f"{basedir}/app/temp/{file.filename}")
        data = {
            'name': Pattern.query.get(form.name.data).name,
            'display_name': form.display_name.data,
            'image': result['url'] if request.files.get('image') else p.image, 
        }
        p.from_dict(data)
        db.session.commit()
        flash('Edited pattern successfully', 'info')
        return redirect(url_for('admin.hair_patterns'))
    context = {
        'pattern': p,
        'form': form
    }
    return render_template('admin/hair/patterns-edit.html', **context)

@admin.route('/hair/pattern/delete')
def delete_hair_pattern():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    pattern = Pattern.query.get(_id)
    pattern.delete_hair_pattern()
    flash('Pattern deleted successfully', 'info')
    return redirect(url_for('admin.hair_patterns'))

####################################
# HAIR WIGS
####################################
@admin.route('hair/wigs', methods=['GET', 'POST'])
def hair_wigs():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminCreateWigForm()
    form.pattern.choices = [(i.id, i.name) for i in Pattern.query.order_by(Pattern.name).all()]
    form.category.choices = [(i.id, i.name) for i in HairCategory.query.order_by(HairCategory.name).all()]
    form.is_viewable.choices = [(1, True), (0, False)]
    form.is_wig.choices = [(1, True), (0, False)]
    

    if form.validate_on_submit():
        # create temp folder if it doesn't exist
        if not os.path.exists(f"{basedir}/app/temp"):
            os.makedirs(f"{basedir}/app/temp")
        # save file to temp folder
        file = request.files.get('image')
        file.save(f"{basedir}/app/temp/{file.filename}")

        # compress via TinyPNG
        with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
            source_data = source.read()
            result_data = tinify.from_buffer(source_data).to_buffer()
            result = upload(result_data)

            # remove image from temp folder
            os.remove(f"{basedir}/app/temp/{file.filename}")
        wig = Hair()
        data = {
            'name': form.name.data.title(),
            'pattern': Pattern.query.get(form.pattern.data).display_name,
            'price': form.price.data,
            'length': form.length.data,
            'category_id': HairCategory.query.filter_by(name='Wigs').first().id,
            'is_viewable': form.is_viewable.data,
            'is_wig': form.is_wig.data,
            'image': result['url'],
        }
        wig.pattern_id = Pattern.query.get(form.pattern.data).id
        wig.from_dict(data)
        wig.create_hair_product()
        flash('Wig created successfully', 'success')
        return redirect(url_for('admin.hair_wigs'))
    return render_template('admin/hair/wigs.html', wigs=HairCategory.query.filter_by(name='Wigs').first().products.all(), category=HairCategory.query.filter_by(name='Wigs').first(), form=form)

@admin.route('/hair/wig/edit', methods=['GET', 'POST'])
def edit_hair_wig():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    p = Hair.query.get(request.args.get('id'))
    form = AdminEditWigForm()
    form.pattern.choices = [(i.id, i.name) for i in Pattern.query.order_by(Pattern.name).all()]
    form.category.choices = [(i.id, i.name) for i in HairCategory.query.order_by(HairCategory.name).all()]
    form.is_viewable.choices = [(1, True), (0, False)]
    form.is_wig.choices = [(1, True), (0, False)]
    
    if form.validate_on_submit():
        p = Hair.query.get(request.form.get('hair_id'))
        data = {
            'name': form.name.data.title(),
            'pattern': Pattern.query.get(form.pattern.data).display_name,
            'price': form.price.data,
            'length': form.length.data,
            'category_id': HairCategory.query.filter_by(name='Wigs').first().id,
            'is_viewable': form.is_viewable.data,
            'is_wig': form.is_wig.data,
        }
        if request.files.get('image'):
            # create temp folder if it doesn't exist
            if not os.path.exists(f"{basedir}/app/temp"):
                os.makedirs(f"{basedir}/app/temp")
            # save file to temp folder
            file = request.files.get('image')
            file.save(f"{basedir}/app/temp/{file.filename}")

            # compress via TinyPNG
            with open(f"{basedir}/app/temp/{file.filename}", 'rb') as source:
                source_data = source.read()
                result_data = tinify.from_buffer(source_data).to_buffer()
                result = upload(result_data)

                # remove image from temp folder
                os.remove(f"{basedir}/app/temp/{file.filename}")
            data.update({'image': result['url']})
        p.from_dict(data)
        db.session.commit()
        flash('Edited wig successfully', 'info')
        return redirect(url_for('admin.hair_wigs'))
    context = {
        'product': p,
        'form': form
    }
    # print(p.pattern_id)
    return render_template('admin/hair/wigs-edit.html', **context)

@admin.route('/hair/wig/delete')
def delete_hair_wig():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    hair = Hair.query.get(_id)
    hair.delete_hair_product()
    flash('Hair deleted successfully', 'danger')
    return redirect(url_for('admin.hair_wigs'))
####################################
# HAIR WIGS
####################################

####################################
# HAIR TIPS
####################################
@admin.route('hair/tips', methods=['GET', 'POST'])
def hair_tips():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    form = AdminCreateHairTipForm()
    if form.validate_on_submit():
        ht = HairTip()
        data = {
            'description': form.description.data, 
        }
        ht.from_dict(data)
        ht.create_tip()
        flash('Hair Tip created successfully', 'success')
        return redirect(url_for('admin.hair_tips'))
    return render_template('admin/hair/tips.html', tips=HairTip.query.all(), form=form)

@admin.route('/hair/tip/edit', methods=['GET', 'POST'])
def edit_hair_tip():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    ht = HairTip.query.get(request.args.get('id'))
    form = AdminEditHairTipForm()
    if form.validate_on_submit():
        data = {
            'description': form.description.data,
        }
        ht.from_dict(data)
        db.session.commit()
        flash('Hair tip updated successfully', 'info')
        return redirect(url_for('admin.hair_tips'))
    context = {
        'tip': ht,
        'form': form
    }
    return render_template('admin/hair/tips-edit.html', **context)

@admin.route('/hair/tip/delete')
def delete_hair_tip():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    ht = HairTip.query.get(_id)
    ht.delete_hair_tip()
    flash('Hair tip deleted successfully', 'info')
    return redirect(url_for('admin.hair_tips'))


@admin.route('/orders', methods=['GET'])
def orders():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    return render_template('admin/orders.html', orders=[i.to_dict() for i in Order.query.all()])


@admin.route('/orders', methods=['POST'])
def create_order():
    pass
    # if not current_user.is_authenticated:
    #     return redirect(url_for('admin.login'))
    # if request.method == 'POST':
    #     order = Coupon()
    #     data = dict(customer_id=request.form.get('order_code'),
    #                 cart_id=request.form.get('discount'),
    #                 product_id=)
    #     order.from_dict(data)
    #     order.create_order()
    #     flash('Coupon created successfully', 'success')
    # return redirect(url_for('admin.orders'))


@admin.route('/orders/delete')
def delete_order():
    if current_user.is_anonymous:
        pass
    elif current_user.is_customer:
        flash('You are not authorized to access this page', 'warning')
        return redirect(url_for('main.index'))
    if not current_user.is_authenticated:
        return redirect(url_for('admin.login'))
    _id = int(request.args.get('id'))
    order = Coupon.query.get(_id)
    order.delete_order()
    flash('Coupon deleted successfully', 'info')
    return redirect(url_for('admin.orders'))
