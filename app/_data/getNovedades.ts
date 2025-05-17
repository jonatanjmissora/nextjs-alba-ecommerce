export function getNovedades(products: ProductType[]) {
    return products.filter(product => product.trend)
}