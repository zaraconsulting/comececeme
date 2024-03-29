"""empty message

Revision ID: 8b1a507f7f21
Revises: 173bc7d2a335
Create Date: 2021-11-06 18:15:57.718289

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b1a507f7f21'
down_revision = '173bc7d2a335'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('product_category', 'image')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product_category', sa.Column('image', sa.VARCHAR(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
