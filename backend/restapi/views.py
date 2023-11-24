from django.shortcuts import render
from rest_framework.views import APIView
from .models import Product
from .serializer import ProductSerializer
from rest_framework.response import Response


# Create your views here.
class ProductView(APIView):

    def get(self, request):
        output = [
            {
                "name": output.name,
                "description": output.description,
                "department": output.department,
                "price": output.price,
                "image_url": output.image_url,
                "hovered_image_url": output.hovered_image_url,
            } for output in Product.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
