from . import bp as main
from flask import request, jsonify, render_template, url_for, redirect, current_app as app
import json, requests

from app.blueprints.reviews.models import Review
from app.blueprints.gallery.models import Gallery
from app.blueprints.services.models import ServiceCategory
from app.email import send_booking_email


@main.route('/', methods=['GET'])
def index():
    """
    [GET] /
    """
    # [i for i in ServiceCategory.query.all() if i.description if i.tag in ['hair_care', 'hairstyles', 'hair_extensions', 'hair_color', 'eyelash_extensions']]
    context = dict(reviews=Review.query.all(), gallery=Gallery.query.all())
    return render_template('index.html', **context), 200

@main.route('/about', methods=['GET'])
def about():
    """
    [GET] /about
    """
    context = dict()
    return render_template('about-us.html'), 200

@main.route('/booking', methods=['GET'])
def booking():
    """
    [GET] /booking
    """
    return redirect("https://www.styleseat.com/m/v/comececeme")

@main.route('/contact', methods=['GET', 'POST'])
def contact():
    """
    [GET] /contact
    [POST] /contact
    """
    if request.method == 'POST':
        data = request.form.to_dict()
        send_booking_email(data)
        json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
        return redirect(url_for('main.contact'))
    context = {}
    return render_template('contact.html', **context), 201

@main.route('/mailchimp/subscribe', methods=['GET', 'POST'])
def mailchimp_subscribe():
    """
    [POST] /mailchimp/subscribe
    """
    # Grab Newsletter subscription form  input
    response = request.get_json()

    if request.method == 'POST':
        try:
            # r = requests.get(f"{app.config.get('MAILCHIMP_URL')}/", headers={'Authorization': f"{app.config.get('MAILCHIMP_API_HEADER')}"}).json()
            # print(r)
            # user = dict(_id=r['account_id'], first_name=r['first_name'], last_name=r['last_name'], username=r['username'], email=r['email'], contact=r['contact'], account_name=r['account_name'])

            # Grab the mailchimp url and mailing list to connect to the Mailchimp API
            mc_url = app.config.get('MAILCHIMP_URL')
            mc_mail_list = app.config.get('MAILCHIMP_MAIL_ID')
            mc_username = app.config.get('MAILCHIMP_USERNAME')
            mc_api_key = app.config.get('MAILCHIMP_API_KEY')

            # Send POST request to Mailchimp API to add a new subcriber from the form input
            data = {
                'email_address': response['email_address'],
                'status': 'subscribed'
            }
            requests.post(f"{mc_url}/lists/{mc_mail_list}/members", auth=(mc_username, mc_api_key), headers={'Content-Type': 'application/json'}, json=data)
        except Exception as err:
            print("""====================================================
            ========================== ERROR ==========================
            ====================================================
            """)
            print(err)
    return redirect(request.referrer)

@main.route('/mailchimp/account', methods=['GET'])
def mailchimp_account():
    """
    [GET] /test
    """
    r = requests.get(f"{app.config.get('MAILCHIMP_URL')}/", headers={'Authorization': f"{app.config.get('MAILCHIMP_API_HEADER')}"}).json()
    data = dict(_id=r['account_id'], first_name=r['first_name'], last_name=r['last_name'], username=r['username'], email=r['email'], contact=r['contact'], account_name=r['account_name'])
    return jsonify(data)
