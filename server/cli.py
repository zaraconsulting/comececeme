import os, click
from flask import cli
from flask.cli import AppGroup

blueprint = AppGroup('blueprint')

@blueprint.command("create")
@click.argument('name')
def create(name):
  """Create new Flask Blueprint"""
  basepath = os.path.abspath(os.path.dirname(__name__)) + f'/app/blueprints/{name}'

  try:
    if not os.path.exists(basepath):
      os.makedirs(basepath)
      init_file = open(f'{basepath}/__init__.py', 'w')
      init_file.close()
      routes_file = open(f'{basepath}/routes.py', 'w')
      routes_file.close()
  except error:
    print(f"Something went wrong with creating the blueprint called {name}")
    print(error)
  return print("Blueprint created successfully")