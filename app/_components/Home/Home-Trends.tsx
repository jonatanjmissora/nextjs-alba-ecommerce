"use client"

import { useProductsContext } from "@/app/_context/products-context-provider"
import TrendCard from "../Card/Trend-Card"
import ChevronSVG from "@/app/_assets/ChevronSVG"
import { useEffect, useRef, useState } from "react"

export default function HomeTrends() {
  const { productsTrends } = useProductsContext()
  const [sliderPosition, setSliderPosition] = useState<number>(1)
  const trendsContainerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(trendsContainerRef.current)
      trendsContainerRef.current.scrollLeft = 0
  }, [])
 
  const slideTo = (direction: string) => {
    if(trendsContainerRef.current) {
      if (direction === "right-0") {
        if (sliderPosition < productsTrends.length) {
          trendsContainerRef.current.scrollLeft += trendsContainerRef.current.offsetWidth;
          setSliderPosition((prev) => prev + 1);
        }
      } else if (sliderPosition > 1) {
        trendsContainerRef.current.scrollLeft -= trendsContainerRef.current.offsetWidth;
        setSliderPosition((prev) => prev - 1);
      }
    }
  }

  return (
    <article className="w-full h-[50dvh] relative">
      <div ref={trendsContainerRef} className="w-full h-full overflow-x-hidden flex flex-nowrap">
        {productsTrends.map(novedad => <TrendCard key={novedad._id} product={novedad} />)}
      </div>

      <ButtonSlider className="left-0" slideTo={slideTo} />
        
      <ButtonSlider className="right-0" slideTo={slideTo} />
        
    </article>
  )
}

const ButtonSlider = ({className, slideTo}:{className: string, slideTo: (direction: string) => void}) => {
  
  return (
    <button 
      className={`absolute w-12 h-12 rounded-full top-1/2 -translate-y-1/2 shadow  cursor-pointer flex justify-center items-center bg-[var(--white)]/75 transition-all opacity-0 hover:opacity-100 duration-300 ${className}`}
      onClick={() => slideTo(className)}
    >
      <ChevronSVG className={`scale-y-200 ${className === "left-0" && "rotate-180"}`}/>
      {}
    </button>
  )
}