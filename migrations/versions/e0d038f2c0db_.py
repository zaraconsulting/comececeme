"""empty message

Revision ID: e0d038f2c0db
Revises: adb325160197
Create Date: 2020-06-03 23:01:42.501911

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e0d038f2c0db'
down_revision = 'adb325160197'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cart',
    sa.Column('customerId', sa.Integer(), nullable=False),
    sa.Column('productId', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['customerId'], ['customer.id'], ),
    sa.ForeignKeyConstraint(['productId'], ['product.id'], ),
    sa.PrimaryKeyConstraint('customerId', 'productId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cart')
    # ### end Alembic commands ###