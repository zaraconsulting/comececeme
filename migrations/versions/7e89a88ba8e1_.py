"""empty message

Revision ID: 7e89a88ba8e1
Revises: 76c3c6fb657c
Create Date: 2021-11-08 19:56:53.334941

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '7e89a88ba8e1'
down_revision = '76c3c6fb657c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product_category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('cart', sa.Column('beauty_product_id', sa.Integer(), nullable=True))
    op.alter_column('cart', 'product_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.create_foreign_key(None, 'cart', 'product', ['beauty_product_id'], ['id'])
    op.add_column('order', sa.Column('beauty_product_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'order', 'product', ['beauty_product_id'], ['id'])
    op.add_column('product', sa.Column('size', sa.Float(), nullable=True))
    op.add_column('product', sa.Column('is_viewable', sa.Boolean(), nullable=True))
    op.drop_constraint('product_category_id_fkey', 'product', type_='foreignkey')
    op.create_foreign_key(None, 'product', 'product_category', ['category_id'], ['id'])
    op.drop_column('product', 'discount')
    op.drop_column('product', 'length')
    op.drop_column('product', 'discount_price')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('discount_price', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True))
    op.add_column('product', sa.Column('length', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('product', sa.Column('discount', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'product', type_='foreignkey')
    op.create_foreign_key('product_category_id_fkey', 'product', 'category', ['category_id'], ['id'])
    op.drop_column('product', 'is_viewable')
    op.drop_column('product', 'size')
    op.drop_constraint(None, 'order', type_='foreignkey')
    op.drop_column('order', 'beauty_product_id')
    op.drop_constraint(None, 'cart', type_='foreignkey')
    op.alter_column('cart', 'product_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.drop_column('cart', 'beauty_product_id')
    op.drop_table('product_category')
    # ### end Alembic commands ###
