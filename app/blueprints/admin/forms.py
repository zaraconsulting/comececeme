from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, SubmitField
from wtforms.validators import Email
import email_validator

class AdminUserForm(FlaskForm):
    email = StringField(validators=[Email()])
    role = SelectField(choices=[], coerce=int)
    # is_admin = BooleanField('is_admin')
    submit = SubmitField('Create User')