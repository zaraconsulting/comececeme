"""Added is_viewable column to Hair class

Revision ID: 5875e994e0d5
Revises: d970b2cf54bf
Create Date: 2021-10-16 18:49:37.969115

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5875e994e0d5'
down_revision = 'd970b2cf54bf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('hair', sa.Column('is_viewable', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('hair', 'is_viewable')
    # ### end Alembic commands ###
