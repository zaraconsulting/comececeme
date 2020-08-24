"""empty message

Revision ID: 5b6f8814984f
Revises: fd10ecd0eebf
Create Date: 2020-08-23 23:14:25.714567

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5b6f8814984f'
down_revision = 'fd10ecd0eebf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('service_category', sa.Column('description', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('service_category', 'description')
    # ### end Alembic commands ###
