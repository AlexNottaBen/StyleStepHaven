type Order = {
    id: number;
    name: string;
    description: string;
    department: string;
    price: number;
    image_url: string;
    hovered_image_url: string;
};

const orders: Order[] = [];
export default orders;
