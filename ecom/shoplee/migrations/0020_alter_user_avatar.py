# Generated by Django 3.2.15 on 2022-09-25 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoplee', '0019_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, default='', null=True, upload_to='users'),
        ),
    ]