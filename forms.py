from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField 
from wtforms.validators import DataRequired, Length, Email

class ProfileForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(),Length(min =2,max=20)])
    email = StringField('Email',validators =[DataRequired(),Email()])
    company = StringField('Company',validators =[DataRequired()])
    location = StringField('Location')
    submit = SubmitField('Sign Up')
