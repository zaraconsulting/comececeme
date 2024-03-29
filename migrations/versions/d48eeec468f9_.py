"""empty message

Revision ID: d48eeec468f9
Revises: 7fa4daaf0886
Create Date: 2021-11-08 18:17:35.777014

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd48eeec468f9'
down_revision = '7fa4daaf0886'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cart', 'product_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cart', 'product_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
