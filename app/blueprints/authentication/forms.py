from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Email, DataRequired, EqualTo

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired()])
    password = password('Password', validators=[DataRequired()])
    submit_login = SubmitField('Login')

class RegisterForm(FlaskForm):
    firstName = StringField('First Name', validators=[DataRequired()])
    lastName = StringField('Last Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Password', validators=[DataRequired(), EqualTo('password')])
    submit_login = SubmitField('Register')

