from flask import current_app, render_template
from flask_mail import Message
from threading import Thread
from .import mail

def send_email(subject, sender, recipients, html_body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.html = html_body
    mail.send(msg)

def send_contact_email(form_data):
    # print(form_data)
    send_email('[ComeCeCeMe] Contact Form Inquiry', 
                sender='noreply@comececeme@com', 
                recipients=[current_app.config.get('MAIL_USERNAME')],
                html_body=render_template('email/contact-inquiry.html', data=form_data))

def send_reservation_email(form_data):
    # print(form_data)
    send_email('[ComeCeCeMe] Appointment Reservation Inquiry', 
                sender='noreply@comececeme.com', 
                recipients=[current_app.config.get('MAIL_USERNAME')],
                html_body=render_template('email/reservation-inquiry.html', data=form_data))