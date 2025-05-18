"use client"

import { PRODUCTS_MOCK } from "@/app/_data/products-mock"
import Card from "../Card/Card"
import CardsSlider from "../Card/Cards-Slider"
import { useProductsContext } from "@/app/_context/products-context-provider"
import { getNovedades } from "@/app/_data/getNovedades"

export default function Novedades() {

  const { productsTrends } = useProductsContext()

  return (
    <CardsSlider title={"Novedades"}>

      {
        productsTrends.map(novedad => <Card key={novedad._id} product={novedad} />)
      }

    </CardsSlider>
  )
}
