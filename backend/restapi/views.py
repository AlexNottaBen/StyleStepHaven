from rest_framework.filters import SearchFilter
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.request import Request
from rest_framework.response import Response

from .models import Product
from .serializer import ProductSerializer
from .purchase import Purchase


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [
        SearchFilter,
    ]
    search_fields = ["name", "description"]


class PurchaseView(APIView):
    # def get(self, request: Request) -> Response:
    #    product_id = request.GET.get('id')
    #    quantity = request.GET.get('quantity') or 1
    #    product = Product.objects.get(id=product_id)
    #    price = product.price
    #    purchase = Purchase(price, quantity)
    #    url = purchase.get_url()
    #    return Response({"url": url})

    def post(self, request: Request) -> Response:
        print(request.data)
        return Response({"done": request.data})
