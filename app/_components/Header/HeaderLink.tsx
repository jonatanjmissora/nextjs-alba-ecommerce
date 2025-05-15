"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function HeaderLink({ href, children }: { href: string, children: ReactNode }) {

  const pathname = usePathname()

  return (
    <Link href={href} className={`btn flex justify-center items-center gap-3 text-xl sm:text-xs 2xl:text-xl  ${pathname === href ? "btn-ghost-active" : "text-[var(--foreground)] hover:text-[var(--color-primary-hover)]"}`}>
      {children}
    </Link>
  )
}
