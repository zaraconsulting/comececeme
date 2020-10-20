from flask import current_app, render_template
from flask_mail import Message
from threading import Thread
from app import mail

def send_email(subject, sender, recipients, html_body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.html = html_body
    mail.send(msg)

def send_payment_confirmation_email(data):
    send_email('[ComeCeCeMe] Payment Confirmation', 
                sender='noreply@comececeme@com', 
                # recipients=[current_app.config.get('MAIL_USERNAME'), current_app.config.get('ADMIN')],
                recipients=[current_app.config.get('ADMIN')],
                html_body=render_template('email/payment-confirmation.html', **data))