'use client';

import { createContext, ReactNode, useContext } from "react";
import { getProducts } from "../_data/getProducts";
import { transformToProductsObject } from "../_lib/utils/trasform-to-products-object";
import { getTrendsFromProducts } from "../_lib/utils/get-trends-from-products";

type ProductContextType = {
    productsObject: ProductObjectType;
    productsTrends: ProductType[]
}

const ProductsContext = createContext<ProductContextType | null>(null);

const products = await getProducts()
const productsObject = transformToProductsObject(products)
const productsTrends = getTrendsFromProducts(products)

export function ProductsContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <ProductsContext.Provider value={{productsObject, productsTrends}}>
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