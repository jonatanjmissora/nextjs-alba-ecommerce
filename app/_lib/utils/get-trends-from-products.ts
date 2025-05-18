export const getTrendsFromProducts = (products: ProductType[]) => {
    return products.filter(product => product.trend)
}