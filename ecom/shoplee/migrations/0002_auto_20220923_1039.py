# Generated by Django 3.2.15 on 2022-09-23 05:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoplee', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='bio',
        ),
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, default='', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='user',
            name='shortBio',
            field=models.TextField(blank=True, null=True),
        ),
    ]
