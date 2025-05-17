interface Product {
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

interface CategoryData {
    products: Product[];
    totalProducts: number;
    totalStock: number;
    totalTrend: number;
    totalCart: number;
    totalFavorite: number;
}

interface FinalData {
    [key: string]: CategoryData;
}

const PRODUCTS: Product[] = [
    {
        _id: 1,
        title: "title-01",
        category: "category-01",
        description: "description-01",
        image: "image-01",
        price: "price-01",
        stock: 1,
        trend: true,
        cart: false,
        favorite: false,
    },
    {
        _id: 2,
        title: "title-02",
        category: "category-02",
        description: "description-02",
        image: "image-02",
        price: "price-02",
        stock: 2,
        trend: false,
        cart: false,
        favorite: false,
    },
    {
        _id: 3,
        title: "title-03",
        category: "category-03",
        description: "description-03",
        image: "image-03",
        price: "price-03",
        stock: 3,
        trend: true,
        cart: false,
        favorite: false,
    }
]

const FINAL: FinalData = {
    "category-01": {
        products: [
            {
                _id: 1,
                title: "title-01",
                category: "category-01",
                description: "description-01",
                image: "image-01",
                price: "price-01",
                stock: 1,
                trend: true,
                cart: false,
                favorite: false,
            }
        ],
        totalProducts: 1,
        totalStock: 1,
        totalTrend: 1,
        totalCart: 0,
        totalFavorite: 0
    },
    "category-02": {
        products: [
            {
                _id: 2,
                title: "title-02",
                category: "category-02",
                description: "description-02",
                image: "image-02",
                price: "price-02",
                stock: 2,
                trend: false,
                cart: false,
                favorite: false,
            }
        ],
        totalProducts: 1,
        totalStock: 2,
        totalTrend: 0,
        totalCart: 0,
        totalFavorite: 0
    },
    "category-03": {
        products: [
            {
                _id: 3,
                title: "title-03",
                category: "category-03",
                description: "description-03",
                image: "image-03",
                price: "price-03",
                stock: 3,
                trend: true,
                cart: false,
                favorite: false,
            }
        ],
        totalProducts: 1,
        totalStock: 3,
        totalTrend: 1,
        totalCart: 0,
        totalFavorite: 0
    }
}

function transformProductsToFinal(products: Product[]): FinalData {
    // Crear un objeto para almacenar los resultados agrupados por categoría
    const groupedByCategory = products.reduce<FinalData>((acc, product) => {
        const { category } = product;
        
        // Si la categoría no existe en el acumulador, inicializarla
        if (!acc[category]) {
            acc[category] = {
                products: [],
                totalProducts: 0,
                totalStock: 0,
                totalTrend: 0,
                totalCart: 0,
                totalFavorite: 0
            };
        }
        
        // Agregar el producto al array de productos de la categoría
        acc[category].products.push(product);
        
        // Actualizar los totales
        acc[category].totalProducts += 1;
        acc[category].totalStock += product.stock;
        acc[category].totalTrend += product.trend ? 1 : 0;
        acc[category].totalCart += product.cart ? 1 : 0;
        acc[category].totalFavorite += product.favorite ? 1 : 0;
        
        return acc;
    }, {});
    
    return groupedByCategory;
}

// Ejemplo de uso:
const result = transformProductsToFinal(PRODUCTS);
console.log(result);