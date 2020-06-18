from flask import current_app, render_template
from flask_mail import Message
from threading import Thread
from .import mail

def send_email(subject, sender, recipients, html_body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.html = html_body
    mail.send(msg)

def send_booking_email(form_data):
    # print(form_data)
    send_email('[ComeCeCeMe] Appointment Inquiry', 
                sender='noreply@comececeme@.com', 
                recipients=['derekhawkins.tech@gmail.com'],
                html_body=render_template('email/reservation-inquiry.html', data=form_data))

def send_reservation_email(form_data):
    # print(form_data)
    send_email('[ComeCeCeMe] Appointment Inquiry', 
                sender='noreply@comececeme@.com', 
                recipients=['derekhawkins.tech@gmail.com'],
                html_body=render_template('email/reservation-inquiry.html', data=form_data))