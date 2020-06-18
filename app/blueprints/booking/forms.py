from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, DateField, SubmitField
from wtforms.validators import Email, DataRequired

class ReservationForm(FlaskForm):
    service_category = SelectField('Choose the type of service', validators=[DataRequired()])
    services = SelectField('Choose the service', validators=[DataRequired()])
    name = StringField('Your name', validators=[DataRequired()])
    email = StringField('Your email', validators=[DataRequired()])
    phone = StringField('Your phone number', validators=[DataRequired()])
    date = DateField('Preferred date & time', validators=[DataRequired()])
    time = SelectField(validators=[DataRequired()])
    note = TextAreaField('Note', validators=[DataRequired()])
