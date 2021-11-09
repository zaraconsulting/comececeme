"""changed length coolumn to size column on Product model

Revision ID: 881c29e4d8b0
Revises: 4a8232a3bf2d
Create Date: 2021-11-06 16:53:30.535744

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '881c29e4d8b0'
down_revision = '4a8232a3bf2d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('size', sa.Float(), nullable=True))
    op.drop_column('product', 'length')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('length', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_column('product', 'size')
    # ### end Alembic commands ###