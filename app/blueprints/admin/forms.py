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
    bundle_length = StringField()
    submit = SubmitField('Create Product')
    
class AdminEditProductForm(FlaskForm):
    is_viewable = SelectField(choices=[], coerce=int)
    pattern = SelectField(choices=[], coerce=int)
    length = IntegerField()
    price = FloatField()
    category = SelectField(choices=[], coerce=int)
    bundle_length = StringField()
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
    display_name = StringField()
    image = StringField()
    submit = SubmitField('Update Pattern')

class AdminCreateWigForm(FlaskForm):
    name = StringField()
    pattern = SelectField(choices=[], coerce=int)
    category = SelectField(choices=[], coerce=int)
    image = StringField()
    length = IntegerField()
    price = FloatField()
    submit = SubmitField('Create Wig')
    
class AdminEditWigForm(FlaskForm):
    is_viewable = SelectField(choices=[], coerce=int)
    name = StringField()
    pattern = SelectField(choices=[], coerce=int)
    category = SelectField(choices=[], coerce=int)
    image = StringField()
    length = IntegerField()
    price = FloatField()
    submit = SubmitField('Update Wig')

class AdminCreateCategoryForm(FlaskForm):
    name = StringField()
    display_name = StringField()
    description = TextAreaField()
    # image = StringField()
    submit = SubmitField('Create Category')
    
class AdminEditCategoryForm(FlaskForm):
    name = StringField()
    display_name = StringField()
    description = TextAreaField()
    # image = StringField()
    submit = SubmitField('Update Category')

class AdminCreateHairTipForm(FlaskForm):
    description = TextAreaField()
    submit = SubmitField('Create Hair Tip')
    
class AdminEditHairTipForm(FlaskForm):
    description = TextAreaField()
    submit = SubmitField('Update Hair Tip')