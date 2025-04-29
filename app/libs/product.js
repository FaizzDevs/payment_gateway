export const products = {
    id: ~~(Math.random() * 100) + 1,
    image: "/baju.jpg",
    name: "Product Baju",
    price: 256000,
    desc: "Baju yang sangat nyaman dan berkualitas tinggi",
    rating: 4.5,
    stock: 10,
    colors: [
        {
            value: "putih",
            label: "Putih",
        },
        {
            value: "merah",
            label: "Merah",
        },
        {
            value: "biru",
            label: "Biru",
        },
        {
            value: "coklat",
            label: "Coklat",
        },
        {
            value: "pink",
            label: "Pink",
        },
    ]
}