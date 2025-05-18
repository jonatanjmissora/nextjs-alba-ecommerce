import MobilMenu from './MobilMenu'
import DesktopMenu from './DesktopMenu'
import Link from 'next/link'

export default async function Header() {

  return (
    <header className="flex justify-between items-center py-8">

      <Link href={"/"} className='py-2 w-1/4 h-full'>
        <span className=''>Alba Shop</span>
      </Link>

      <DesktopMenu />

      <MobilMenu />

    </header>
  )
}
