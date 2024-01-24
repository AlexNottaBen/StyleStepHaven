from rest_framework import serializers
from .models import Product, ProductImage, ProductAttribute


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']


class ProductAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAttribute
        fields = ['name', 'value']


class ProductSerializer(serializers.ModelSerializer):
    gallery = ProductImageSerializer(many=True, read_only=True, source="images")
    attributes = ProductAttributeSerializer(many=True, read_only=True)  # source="attributes" is redundant!

    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "description",
            "department",
            "price",
            "image",
            "hovered_image",
            "attributes",
            "gallery"
        )
