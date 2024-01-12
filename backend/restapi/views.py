from rest_framework.filters import SearchFilter
from rest_framework.views import APIView
from .models import Product
from .serializer import ProductSerializer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet


# before
'''
# Create your views here.
class ProductView(APIView):

    def get(self, request):
        products = [
            {
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "department": product.department,
                "price": product.price,
                "image_url": product.image_url,
                "hovered_image_url": product.hovered_image_url,
            } for product in Product.objects.all()
        ]
        return Response(products)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
'''


# after
class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [
        SearchFilter,
    ]
