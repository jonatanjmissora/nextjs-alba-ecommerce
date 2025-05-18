"use client"

import Card from "../Card/Card"
import CardsContainer from "../Card/Cards-Container"
import { useProductsContext } from "@/app/_context/products-context-provider";

export default function HomeProducts() {
  
  const { productsObject } = useProductsContext()
  const categories = Object.keys(productsObject)

  return (

    <div>
      {
        categories.map(category => 
          <CategoriesContainer 
            key={category} 
            category={category} 
            products={productsObject[category].products}
          />
        )
      }
    </div>
  )
}

const CategoriesContainer = ({category, products}:{category: string, products: ProductType[]}) => {
  return (
    <CardsContainer title={category}>

      {
        products.map(product => <Card key={product._id} product={product} />)
      }

    </CardsContainer>
  )
}
