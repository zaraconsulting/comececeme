"""changed customer model - phone BigInt -> String

Revision ID: 049dbbe05a11
Revises: 6091c653359a
Create Date: 2020-09-26 14:28:30.724157

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '049dbbe05a11'
down_revision = '6091c653359a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('customer', 'phone',
               existing_type=sa.BIGINT(),
               type_=sa.String(),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('customer', 'phone',
               existing_type=sa.String(),
               type_=sa.BIGINT(),
               existing_nullable=True)
    # ### end Alembic commands ###
