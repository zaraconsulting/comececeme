from .import bp as api
from flask import jsonify, request, url_for
from app.models import Faqs, Customer, Product, Category, Order, Coupon, ProductReview, Hair, HairCategory, Pattern
from app import db

# PRODUCTS API
@api.route('/products', methods=['GET'])
def get_products():
    """
    [GET] /api/products
    """
    return jsonify([i.to_dict() for i in Product.query.all()])

    
@api.route('/product', methods=['GET'])
def get_product():
    """
    [GET] /api/product?id=1
    """
    _id = request.args.get('id')
    return jsonify(Product.query.get_or_404(_id).to_dict())

@api.route('/product/<int:id>', methods=['PUT'])
def edit_product(id):
    """
    [PUT] /api/product/edit/id=1
    """
    # _id = request.args.get('id')
    _id = request.args.get('id')
    product = Product.query.get_or_404(_id)
    data = request.get_json() or {}
    product.from_dict(data)
    db.session.commit()
    return jsonify(product.to_dict())


@api.route('/product/category', methods=['POST'])
def create_category():
    """
    [POST] /api/product/category
    """
    data = request.get_json()
    category = Category()
    category.from_dict(data)
    category.create_category()
    response = jsonify(category.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_category', id=category.id)
    return response


@api.route('/product/category/edit/<int:id>', methods=['PUT'])
def update_category():
    """
    [PUT] /api/product/category/update
    """
    category = Category.query.get_or_404(id)
    data = request.get_json() or {}
    category.from_dict(data)
    db.session.commit()
    return jsonify(category.to_dict())


@api.route('/product/category/delete/<int:id>', methods=['DELETE'])
def delete_category():
    """
    [DELETE] /api/product/category/delete
    """
    category = Category.query.get_or_404(id)
    category.delete_category()
    return jsonify({'message': f'PRODUCT DELETED'})

# CUSTOMER
@api.route('/customer', methods=['GET'])
def get_customers():
    """
    [GET] /api/customer
    """
    return jsonify([i.to_dict() for i in Customer.query.all()])


@api.route('/customer/<int:id>', methods=['GET'])
def get_customer(id):
    """
    [GET] /api/customer/<id>
    """
    return jsonify(Customer.query.get_or_404(id).to_dict())


@api.route('/customer/create', methods=['POST'])
def create_customer():
    """
    [POST] /api/customer/create
    """
    data = request.get_json()
    customer = Customer()
    customer.from_dict(data)
    customer.create_customer()
    response = jsonify(customer.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_customer', id=customer.id)
    return response


@api.route('/customer/edit/<int:id>', methods=['PUT'])
def update_customer():
    """
    [POST] /api/customer/update
    """
    customer = Customer.query.get_or_404(id)
    data = request.get_json() or {}
    customer.from_dict(data)
    db.session.commit()
    return jsonify(customer.to_dict())


@api.route('/customer/delete/<int:id>', methods=['DELETE'])
def delete_customer():
    """
    [POST] /api/customer/delete
    """
    customer = Customer.query.get_or_404(id)
    customer.delete_customer()
    return jsonify({'message': f'PRODUCT DELETED'})


# HAIR
@api.route('/hair/products', methods=['GET'])
def get_hair_products():
    """
    [GET] /api/hair/products
    """
    return jsonify([i.to_dict() for i in Hair.query.all()])

    
@api.route('/hair/product/<int:id>', methods=['GET'])
def get_hair_product(id):
    """
    [GET] /api/hair/product/<id>
    """
    return jsonify(Hair.query.get(id).to_dict())

@api.route('/hair/product', methods=['POST'])
def create_hair_product():
    """
    [POST] /api/hair/product
    """
    data = request.get_json()
    hair = Hair()
    hair.from_dict(data)
    hair.create_hair_product()
    response = jsonify(hair.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_hair_product', id=hair.id)
    return response

@api.route('/hair/product/<int:id>', methods=['PUT'])
def edit_hair_product(id):
    """
    [PUT] /api/hair/product/<id>
    """
    hair_product = Hair.query.get_or_404(id)
    data = request.get_json() or {}
    hair_product.from_dict(data)
    db.session.commit()
    return jsonify(hair_product.to_dict())

@api.route('/hair/product/<id>', methods=['DELETE'])
def delete_hair_product(id):
    """
    [DELETE] /api/hair/product/<id>
    """
    hair_product = Hair.query.get(id)
    hair_product.delete_hair_product()
    return jsonify({'message': f'HAIR PRODUCT DELETED'})

# HAIR CATEGORIES
@api.route('/hair/categories', methods=['GET'])
def get_hair_categories():
    """
    [GET] /api/hair/categories
    """
    return jsonify([i.to_dict() for i in HairCategory.query.all()])


@api.route('/hair/category/<name>', methods=['GET'])
def get_hair_category(name):
    """
    [GET] /api/hair/category/<name>
    """
    category = HairCategory.query.filter_by(name=name.title()).first()
    return jsonify(HairCategory.query.get_or_404(category.id).to_dict())


@api.route('/hair/category', methods=['POST'])
def create_hair_category():
    """
    [POST] /api/hair/category
    """
    data = request.get_json()
    hair_category = HairCategory()
    hair_category.from_dict(data)
    print(hair_category)
    hair_category.create_hair_category()
    response = jsonify(hair_category.to_dict())
    print(jsonify(hair_category.to_dict()))
    response.status_code = 201
    # response.headers['Location'] = url_for('api.get_hair_category', name=hair_category.name)
    return response


@api.route('/hair/category/edit/<name>', methods=['PUT'])
def update_hair_category(name):
    """
    [PUT] /api/hair/category/edit/<name>
    """
    hair_category = HairCategory.query.filter_by(name=name.title()).first()
    data = request.get_json() or {}
    hair_category.from_dict(data)
    db.session.commit()
    return jsonify(hair_category.to_dict())


@api.route('/hair/category/delete/<name>', methods=['DELETE'])
def delete_hair_category(name):
    """
    [DELETE] /api/hair/category/delete/name
    """
    hair_category = HairCategory.query.filter_by(name=name.title()).first()
    hair_category.delete_hair_category()
    return jsonify({'message': f'PRODUCT DELETED: {hair_category.name}'})

# HAIR PATTERN
@api.route('/hair/patterns', methods=['GET'])
def get_hair_patterns():
    """
    [GET] /api/hair/patterns
    """
    return jsonify([i.to_dict() for i in Pattern.query.all()])

@api.route('/hair/pattern', methods=['POST'])
def create_hair_pattern():
    """
    [POST] /api/hair/PATTERN
    """
    data = request.get_json()
    pattern = Pattern()
    pattern.from_dict(data)
    pattern.create_hair_pattern()
    response = jsonify(pattern.to_dict())
    response.status_code = 201
    # response.headers['Location'] = url_for('api.get_hair_pattern', id=pattern.id)
    return response


@api.route('/hair/pattern/<id>', methods=['DELETE'])
def delete_hair_pattern(id):
    """
    [DELETE] /api/hair/product/<id>
    """
    hair_pattern = Pattern.query.get(id)
    hair_pattern.delete_hair_pattern()
    return jsonify({'message': f'HAIR PRODUCT DELETED'})


@api.route('/hair/pattern/<pattern>', methods=['GET'])
def get_hair_pattern(pattern):
    """
    [GET] /api/hair/pattern/<pattern>
    """
    return jsonify([i.to_dict() for i in Pattern.query.filter_by(name=pattern).first()])

# FAQS
@api.route('/faqs', methods=['GET'])
def get_faqs():
    """
    [GET] /api/faqs
    """
    return jsonify([i.to_dict() for i in Faqs.query.all()])

@api.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    """
    [GET] /api/faqs/<id>
    """
    return jsonify(Faqs.query.get_or_404(id).to_dict())


@api.route('/faqs', methods=['POST'])
def create_faq():
    """
    [POST] /api/faqs
    """
    data = request.get_json()
    faq = Faqs()
    faq.from_dict(data)
    faq.create_faq()
    response = jsonify(faq.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_faq', id=faq.id)
    return response

@api.route('/faqs/<id>', methods=['PUT'])
def update_faq(id):
    """
    [PUT] /api/faqs/<id>
    """
    faq = Faqs.query.get(id)
    data = request.get_json() or {}
    faq.from_dict(data)
    db.session.commit()
    return jsonify(faq.to_dict())

@api.route('/faqs/<id>', methods=['DELETE'])
def delete_faq(id):
    """
    [DELETE] /api/faqs/<id>
    """
    faq = Faqs.query.get(id)
    faq.delete_faq()
    return jsonify({'message': f'FAQ DELETED'})

# ORDERS
@api.route('/orders', methods=['GET'])
def get_orders():
    """
    [GET] /api/orders
    """
    return jsonify([i.to_dict() for i in Order.query.all()])

@api.route('/orders/<int:id>', methods=['GET'])
def get_order(id):
    """
    [GET] /api/orders/<id>
    """
    return jsonify(Order.query.get_or_404(id).to_dict())


@api.route('/orders', methods=['POST'])
def create_order():
    """
    [POST] /api/orders
    """
    data = request.get_json()
    order = Order()
    order.from_dict(data)
    order.create_order()
    response = jsonify(order.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_order', id=order.id)
    return response

@api.route('/orders/<id>', methods=['PUT'])
def update_order(id):
    """
    [PUT] /api/orders/<id>
    """
    order = Order.query.get(id)
    data = request.get_json() or {}
    order.from_dict(data)
    db.session.commit()
    return jsonify(order.to_dict())

@api.route('/orders/<id>', methods=['DELETE'])
def delete_order(id):
    """
    [DELETE] /api/orders/<id>
    """
    order = Order.query.get(id)
    order.delete_order()
    return jsonify({'message': f'FAQ DELETED: {order.name} ({order.id})'})


@api.route('/coupons', methods=['GET'])
def get_coupons():
    """
    [GET] /api/coupons
    """
    return jsonify([i.to_dict() for i in Coupon.query.all()])


@api.route('/coupons/<int:id>', methods=['GET'])
def get_coupon(id):
    """
    [GET] /api/coupons/<id>
    """
    return jsonify(Coupon.query.get_or_404(id).to_dict())


@api.route('/coupons', methods=['POST'])
def create_coupon():
    """
    [POST] /api/coupons/create
    """
    data = request.get_json()
    coupon = Coupon()
    coupon.from_dict(data)
    coupon.create_coupon()
    response = jsonify(coupon.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_coupon', id=coupon.id)
    return response


@api.route('/coupons/<int:id>', methods=['PUT'])
def update_coupon():
    """
    [POST] /api/coupons/<id>
    """
    coupon = Coupon.query.get_or_404(id)
    data = request.get_json() or {}
    coupon.from_dict(data)
    db.session.commit()
    return jsonify(coupon.to_dict())


@api.route('/coupons/<int:id>', methods=['DELETE'])
def delete_coupon():
    """
    [POST] /api/coupons/<id>
    """
    coupon = Coupon.query.get_or_404(id)
    coupon.delete_coupon()
    return jsonify({'message': f'COUPON DELETED'})

# PRODUCT REVIEWS
@api.route('/product/review', methods=['GET'])
def get_product_review():
    """
    [GET] /product/review
    """
    return jsonify(ProductReview.query.get(request.args.get('id')).to_dict())

@api.route('/product/review/create', methods=['POST'])
def create_product_review():
    """
    [POST] /product/review/create
    """
    data = request.get_json()
    product_review = ProductReview()
    product_review.from_dict(data)
    product_review.create_product_review()
    response = jsonify(product_review.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_product_review', id=product_review.id)
    return response