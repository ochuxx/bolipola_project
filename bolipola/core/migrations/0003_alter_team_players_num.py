# Generated by Django 4.2.4 on 2023-09-15 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='players_num',
            field=models.PositiveIntegerField(default=0, verbose_name='Número de jugadores'),
        ),
    ]
