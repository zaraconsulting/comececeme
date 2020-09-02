"""chupdated Hair model and added HairReview model

Revision ID: 7e7b0cf8fc7e
Revises: 588096233bb5
Create Date: 2020-09-01 06:24:05.184080

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7e7b0cf8fc7e'
down_revision = '588096233bb5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('hair_review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('author', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('body', sa.Text(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.Column('hair_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['hair_id'], ['hair.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('hair_review')
    # ### end Alembic commands ###
