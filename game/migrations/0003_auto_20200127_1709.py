# Generated by Django 3.0.2 on 2020-01-27 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_auto_20200122_1409'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='number_of_moves',
            field=models.IntegerField(),
        ),
    ]
