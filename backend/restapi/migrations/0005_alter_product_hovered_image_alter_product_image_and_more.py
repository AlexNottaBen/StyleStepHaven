# Generated by Django 4.2.7 on 2024-01-21 13:36

from django.db import migrations, models
import django.db.models.deletion
import restapi.models


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0004_remove_product_hovered_image_url_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='hovered_image',
            field=models.ImageField(blank=True, null=True, upload_to=restapi.models.get_product_images_upload_location),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=restapi.models.get_product_images_upload_location),
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=restapi.models.get_product_images_upload_location)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='images', to='restapi.product', verbose_name='images')),
            ],
        ),
    ]