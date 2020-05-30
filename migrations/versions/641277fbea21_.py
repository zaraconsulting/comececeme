"""empty message

Revision ID: 641277fbea21
Revises: fcb48a215f3c
Create Date: 2020-05-28 19:54:01.761925

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '641277fbea21'
down_revision = 'fcb48a215f3c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product_review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('product_review')
    # ### end Alembic commands ###
