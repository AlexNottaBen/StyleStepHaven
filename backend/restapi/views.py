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

    def post(self, request: Request) -> Response:
        amount: float = 0.0
        products = request.data.get("order")
        for product in products:
            amount += float(product.get("price")) * int(product.get("count"))

        amount_str: str = str(amount)

        integer = int(amount)
        decimal = amount_str[-2:].replace(".", "")
        if len(decimal) == 1:
            decimal += "0"

        print(integer, decimal)

        purchase = Purchase(integer=integer, decimal=decimal)
        url = purchase.get_url()

        return Response({"url": url})
