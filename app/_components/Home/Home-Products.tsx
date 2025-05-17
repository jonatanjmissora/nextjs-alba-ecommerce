"use client"

import Card from "../Card/Card"
import CardsContainer from "../Card/Cards-Container"
import { useProductsContext } from "@/app/_context/products-context-provider";

function transformProductsToFinal(products: Product[]): FinalData {
  // Crear un objeto para almacenar los resultados agrupados por categoría
  const groupedByCategory = products.reduce<FinalData>((acc, product) => {
      const { category } = product;
      
      // Si la categoría no existe en el acumulador, inicializarla
      if (!acc[category]) {
          acc[category] = {
              products: []
          };
      }
      
      // Agregar el producto al array de productos de la categoría
      acc[category].products.push(product);
      
      
      
      return acc;
  }, {});
  
  return groupedByCategory;
}

export default function HomeProducts() {
  
  const { products } = useProductsContext()
  const porductsByCategory = transformProductsToFinal(products)
  console.log(porductsByCategory)

  return (

    <div>

    <CardsContainer title={"Productos"}>

      {
        products.map(product => <Card key={product._id} product={product} />)
      }

    </CardsContainer>
    </div>
  )
}
