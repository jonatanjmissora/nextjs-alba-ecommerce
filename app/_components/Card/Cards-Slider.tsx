import { ReactNode } from "react";

export default function CardsSlider({children, title}: {children: ReactNode, title: string}) {
  return (
    <article className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-wider">{title}</h2>

        <div className="flex gap-12">
            {children}
        </div>

    </article>
  )
}
