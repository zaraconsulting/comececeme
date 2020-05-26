"""empty message

Revision ID: 03254a3da60f
Revises: 81650c73011c
Create Date: 2020-05-26 00:40:33.284170

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '03254a3da60f'
down_revision = '81650c73011c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('service', sa.Column('service_category_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'service', 'service_category', ['service_category_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'service', type_='foreignkey')
    op.drop_column('service', 'service_category_id')
    # ### end Alembic commands ###
