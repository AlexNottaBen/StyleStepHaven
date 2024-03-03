from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Product, ProductImage, ProductAttribute, ProductSize


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']


class ProductAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAttribute
        fields = ['name', 'value']


class ProductSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSize
        fields = ['size']


class ProductSerializer(serializers.ModelSerializer):
    gallery = ProductImageSerializer(many=True, read_only=True, source="images")
    attributes = ProductAttributeSerializer(many=True, read_only=True)  # source="attributes" is redundant!
    sizes = ProductSizeSerializer(many=True, read_only=True)

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
            "sizes",
            "attributes",
            "gallery"
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "date_joined",
            "last_login",
        )

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
            "first_name",
            "last_name",
            "password",
        )

    def create(self, validated_data):
        # Hash password before save.
        validated_data['password'] = make_password(validated_data['password'])
        user = super(UserRegisterSerializer, self).create(validated_data)
        return user
