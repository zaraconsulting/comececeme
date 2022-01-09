#!/bin/sh
exec gunicorn -b 5002 app:create_app()