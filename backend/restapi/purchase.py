from cloudipsp import Api, Checkout


class Purchase:
    def __init__(self, integer: int, decimal: str):
        self._integer: str = str(integer)
        self._decimal: str = str(decimal)

    def get_url(self):
        """source: https://github.com/cloudipsp/python-sdk"""

        api: Api = Api(merchant_id=1396424, secret_key="test")
        checkout: Checkout = Checkout(api=api)
        data: dict = {
            "currency": "UAH",
            "amount": self._integer + self._decimal,
        }
        url: str = checkout.url(data).get("checkout_url")
        return url