'use client';

import { createContext, ReactNode, useContext } from "react";

interface ProductType {
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

interface ProductsContextType {
    products: ProductType[];
}

const ProductsContext = createContext<ProductsContextType | null>(null);

export function ProductsContextProvider({
    children,
    products
}: {
    children: ReactNode;
    products: ProductType[];
}) {
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProductsContext() {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProductsContext must be used within a ProductsContextProvider");
    }
    return context;
} 