"use client"

import { useState } from "react"

export default function TrendCard({product}:{product: ProductType}) {

  return (
    <div className="min-w-full h-full bg-green-500 flex justify-center items-center">Trend-Card {product._id}</div>
  )
}
