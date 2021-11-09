"""empty message

Revision ID: ef97ccd20ae6
Revises: 7d5703fb9531
Create Date: 2021-11-08 18:37:19.999345

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ef97ccd20ae6'
down_revision = '7d5703fb9531'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cart', 'product_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.drop_constraint('cart_beauty_product_id_fkey', 'cart', type_='foreignkey')
    op.drop_column('cart', 'beauty_product_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart', sa.Column('beauty_product_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('cart_beauty_product_id_fkey', 'cart', 'product', ['beauty_product_id'], ['id'])
    op.alter_column('cart', 'product_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###