from flask import render_template, redirect, url_for, request, jsonify
from . import bp as services

from app.blueprints.services.models import Service
from app.blueprints.services.models import ServiceCategory

@services.route('/')
def index():
    """
    [GET] /services
    """
    context = dict(service_categories=ServiceCategory.query.all())
    return render_template('services.html', **context)

@services.route('/service/<int:id>', methods=['GET'])
def get_service(id):
    """
    [GET] /services/service/<id>
    """
    return jsonify(Service.query.get(id).to_dict())

@services.route('/create', methods=['POST'])
def create_service():
    """
    [POST] /services/create
    """
    data = request.get_json()
    service = Service()
    service.from_dict(data)
    service.create_service()
    response = jsonify(service.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('services.get_service', id=service.id)
    return response


# SERVICE CATEGORY ROUTES
@services.route('/category/<int:id>', methods=['GET'])
def get_service_category(id):
    """
    [GET] /services/category/<id>
    """
    return jsonify(ServiceCategory.query.get(id).to_dict())


@services.route('/category/create', methods=['POST'])
def create_service_category():
    """
    [POST] /services/category/create
    """
    data = request.get_json()
    service_category = ServiceCategory()
    service_category.from_dict(data)
    service_category.create_service_category()
    response = jsonify(service_category.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('services.get_service_category', id=service_category.id)
    return response
