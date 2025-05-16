import HomeProducts from "../_components/home/HomeProducts";
import Novedades from "../_components/home/Novedades";

export default async function page() {

  return (
    <div className="flex-1 flex justify-center items-center mx-auto w-full ">
      
      <Novedades />

      <HomeProducts />

    </div>
  )
}
