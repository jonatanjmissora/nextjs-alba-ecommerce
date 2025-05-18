export function transformToProductsObject(products: ProductType[]): ProductObjectType {

    const productsObject = products.reduce<ProductObjectType>((acc, product) => {
        const { category } = product;
        if (!acc[category]) {
            acc[category] = {
                products: []
            };
        }
        acc[category].products.push(product);
        return acc;
    }, {});
    
    return productsObject;
  }