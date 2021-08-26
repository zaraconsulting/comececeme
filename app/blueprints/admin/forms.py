from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, SubmitField, PasswordField, IntegerField, FloatField, TextAreaField
from wtforms.validators import Email, DataRequired, EqualTo
import email_validator

class AdminUserForm(FlaskForm):
    email = StringField(validators=[Email()])
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    role = SelectField(choices=[], coerce=int)
    # is_admin = BooleanField('is_admin')
    submit = SubmitField('Create User')

class AdminEditUserForm(FlaskForm):
    email = StringField(validators=[Email()])
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    role = SelectField(choices=[], coerce=int)
    is_admin = BooleanField('is_admin')
    submit = SubmitField('Update User')

class AdminLoginForm(FlaskForm):
    email = StringField('Email', validators=[Email(), DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember password')
    submit = SubmitField('Login')

class AdminCreateProductForm(FlaskForm):
    pattern = SelectField(choices=[], coerce=int)
    length = IntegerField()
    price = FloatField()
    category = SelectField(choices=[], coerce=int)
    bundle_length = IntegerField()
    submit = SubmitField('Create Product')
    
class AdminEditProductForm(FlaskForm):
    pattern = SelectField(choices=[], coerce=int)
    length = IntegerField()
    price = FloatField()
    category = SelectField(choices=[], coerce=int)
    bundle_length = IntegerField()
    submit = SubmitField('Update Product')

class AdminResetPasswordRequestForm(FlaskForm):
    email = StringField('Email', validators=[Email(), DataRequired()])
    submit = SubmitField('Request Password Reset')

class AdminResetPasswordForm(FlaskForm):
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Reset Password')

class AdminCreatePatternForm(FlaskForm):
    name = StringField()
    display_name = StringField()
    image = StringField()
    submit = SubmitField('Create Pattern')
    
class AdminEditPatternForm(FlaskForm):
    name = SelectField(choices=[], coerce=int)
    image = StringField()
    submit = SubmitField('Update Pattern')

class AdminCreateHairTipForm(FlaskForm):
    description = TextAreaField()
    submit = SubmitField('Create Hair Tip')
    
class AdminEditHairTipForm(FlaskForm):
    description = TextAreaField()
    submit = SubmitField('Update Hair Tip')