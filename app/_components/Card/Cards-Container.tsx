import { ReactNode } from "react";

export default function CardsContainer({children, title}: {children: ReactNode, title: string}) {
  return (
    <article className="flex flex-col gap-4 pb-12">
        <h2 className="text-xl font-semibold tracking-wider">{title}</h2>

        <div className="flex gap-12">
            {children}
        </div>

    </article>
  )
}
