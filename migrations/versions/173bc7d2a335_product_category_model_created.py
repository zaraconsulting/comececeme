"""product category model created

Revision ID: 173bc7d2a335
Revises: 0e86a484b2f7
Create Date: 2021-11-06 17:36:13.143874

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '173bc7d2a335'
down_revision = '0e86a484b2f7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product_category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_constraint('product_category_id_fkey', 'product', type_='foreignkey')
    op.create_foreign_key(None, 'product', 'product_category', ['category_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'product', type_='foreignkey')
    op.create_foreign_key('product_category_id_fkey', 'product', 'category', ['category_id'], ['id'])
    op.drop_table('product_category')
    # ### end Alembic commands ###
