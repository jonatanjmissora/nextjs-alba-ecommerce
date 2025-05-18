"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function HeaderLink({ href, children }: { href: string, children: ReactNode }) {

  const pathname = usePathname()

  return (
    <Link href={href} className={`flex justify-center items-center gap-3 text-xl sm:text-base 2xl:text-xl hover:text-[var(--color-primary-hover)] ${pathname === href && "border-b-2 border-[var(--color-primary)]"} ${href === "/about" && "ml-auto"}`}>
      {children}
    </Link>
  )
}
