import HomeProducts from "./Home-Products";
import Novedades from "./Home-Novedades";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-12 w-full">
        <Novedades />

        <HomeProducts />
    </section>
  )
}
