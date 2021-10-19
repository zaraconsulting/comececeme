"""added image column to Hair model

Revision ID: f8ed95f3d14c
Revises: fbe661a70814
Create Date: 2021-10-18 23:12:20.529427

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8ed95f3d14c'
down_revision = 'fbe661a70814'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('hair', sa.Column('image', sa.String(), nullable=True))
    op.drop_column('hair_category', 'image')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('hair_category', sa.Column('image', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('hair', 'image')
    # ### end Alembic commands ###
