from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework import serializers

from .models import (
    Product,
    ProductImage,
    ProductAttribute,
    ProductSize,
    Profile
)


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


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            "city",
            "phone_number",
        )


class UserSerializer(serializers.ModelSerializer):

    profile = UserProfileSerializer(many=False, read_only=True)

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "date_joined",
            "last_login",
            "profile",
        )


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "password",
        )
        read_only_fields = ("id",)  # Mark 'id' as read-only to prevent modification

    def create(self, validated_data):
        # Hash password before save.
        validated_data['password'] = make_password(validated_data['password'])
        user = super(UserRegisterSerializer, self).create(validated_data)
        return user


