type ProductType = {
    _id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: string;
    stock: number;
    trend: boolean;
    cart: boolean;
    favorite: boolean;
}

type CategoryData = {
    products: ProductType[];
}

type ProductObjectType = {
    [key: string]: CategoryData;
}