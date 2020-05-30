from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, DateField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email
from app.blueprints.services.models import Service, ServiceCategory

class ReservationForm(FlaskForm):
    # service = SelectField(choices=[(i.id, i.name) for i in ServiceCategory.query.all()])
    service = SelectField(choices=[])
    # service_type = 
    # name = 
    # email = 
    # phone = 
    # date = 
    # time = 
    # note = 
    # submit = 