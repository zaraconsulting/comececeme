from . import bp as booking
from flask import jsonify, request, url_for, render_template, redirect
from app.models import Service, ServiceCategory
from app.email import send_reservation_email
from datetime import datetime as dt

from .forms import ReservationForm

@booking.route('/', methods=['GET', 'POST'])
def index():
    form = ReservationForm()
    # form.service_category.choices = ['Choose one...'] + [i.name for i in ServiceCategory.query.all()]
    # form.services.choices = ['Choose one...'] + [i.title for i in Service.query.all()]
    form.service_category.choices = [i.name for i in ServiceCategory.query.all()]
    form.services.choices = [i.title for i in Service.query.all()]

    times = ['%s:%s%s' % (h, m, ap) for ap in ('am', 'pm') for h in ([12] + list(range(1,12))) for m in ('00', '30')]
    form.time.choices = times[times.index('10:00am'):times.index('6:30pm')]

    if request.method == 'POST':
        data = request.form.to_dict()
        if 'csrf' in data and 'payment_method_nonce' in data:
            pass
        else:
            # print(data)
            new_data = data.copy()
            # new_data['date'] = dt.strptime(form.date.data, '%m/%d/%Y')
            send_reservation_email(new_data)
            return redirect(url_for('booking.index'))
    return render_template('booking.html', form=form)
