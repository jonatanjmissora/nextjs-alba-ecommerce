import HomeProducts from "./Home-Products";
import HomeTrends from "./Home-Trends";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-12 w-full">

        <HomeTrends />
        <HomeProducts />

    </section>
  )
}
