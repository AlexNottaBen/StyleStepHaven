const products = [
    {
        id: 1,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://kedoff.net/images/product/large/jenskie-krossovki-adidas-superstar-ef5399.jpg",
        hoveredImageUrl: "https://img.klubok.com/img/used/2019/03/07/20787/20787408_2.jpg",
    },
    {
        id: 2,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        hoveredImageUrl: "https://34travel.me/media/upload/images/2020/MAY/arch2020/1.jpg",
    },
    {
        id: 3,
        name: "Product 3",

        price: 300 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 4,

        name: "Product 4",
        price: 400 + "$",

        name: "Product 22",
        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 5,

        name: "Product 5",
        price: 500 + "$",

        name: "Product 1",
        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 6,

        name: "Product 6",
        price: 600 + "$",

        name: "Product 2",
        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 7,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 8,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 9,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 10,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 11,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 12,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 13,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 14,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 15,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 16,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 17,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 18,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
        id: 19,
        name: "Product 1",

        price: 100 + "$",

        price: 100,

        imageUrl: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg",
    },
    {
        id: 20,
        name: "Product 2",

        price: 200 + "$",

        price: 200,

        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
];

export default products;
