from cloudipsp import Api, Checkout


class Purchase:
    def __init__(self, price, quantity):
        self._price: int = int(price)
        self._quantity: int = int(quantity)
        self._amount: int = self._price * self._quantity

    def get_url(self):
        """source: https://github.com/cloudipsp/python-sdk"""

        api: Api = Api(merchant_id=1396424, secret_key="test")
        checkout: Checkout = Checkout(api=api)
        data: dict = {
            "currency": "UAH",
            "amount": str(self._amount) + "00",
        }
        url: str = checkout.url(data).get("checkout_url")
        return url