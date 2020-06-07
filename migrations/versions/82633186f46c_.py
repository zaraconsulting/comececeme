"""empty message

Revision ID: 82633186f46c
Revises: f85e43690237
Create Date: 2020-06-07 10:40:10.718939

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '82633186f46c'
down_revision = 'f85e43690237'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('order',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('order_date', sa.DateTime(), nullable=True),
    sa.Column('customer_id', sa.Integer(), nullable=True),
    sa.Column('cart_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['cart_id'], ['cart.id'], ),
    sa.ForeignKeyConstraint(['customer_id'], ['customer.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('order')
    # ### end Alembic commands ###
