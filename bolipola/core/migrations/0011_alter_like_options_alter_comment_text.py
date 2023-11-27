# Generated by Django 4.2.4 on 2023-11-26 19:27

import core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_alter_comment_date_alter_comment_score_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='like',
            options={'ordering': ['id'], 'verbose_name': 'Like', 'verbose_name_plural': 'Likes'},
        ),
        migrations.AlterField(
            model_name='comment',
            name='text',
            field=models.TextField(max_length=150, validators=[core.models.validate_min_comment], verbose_name='Texto'),
        ),
    ]
