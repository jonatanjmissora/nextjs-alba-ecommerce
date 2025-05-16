
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import MobilMenu from './MobilMenu'
import DesktopThemeSwitcher from './DesktopThemeSwitcher'
import { CartSVG } from '@/app/_assets/CartSVG'
import HeartSVG from '@/app/_assets/HeartSVG'

export default async function Header() {

  return (
    <header className="flex justify-between items-center py-8 text-[var(--white)]">

      <HeaderLink href={"/"}>
        <span className='text-xl 2xl:text-2xl'>Alba Shop</span>
        </HeaderLink>

      <DesktopMenu />

      <MobilMenu />

    </header>
  )
}

const DesktopMenu = () => {
  return (
    <>
      <nav className='sm:flex space-x-8 hidden'>
        
        <HeaderLink href={"/favorites"}>
          <span>Favoritos</span>
          <CartSVG className="size-7"/>
        </HeaderLink>

        <HeaderLink href={"/cart"}>
        <span>Carrito</span>
          <HeartSVG className="size-7"/>
        </HeaderLink>
       
      </nav>

      <nav className='sm:flex space-x-8 hidden'>

        <HeaderLink href={"/about"}>
          <span>Nosotros</span>
        </HeaderLink>
        
        <DesktopThemeSwitcher />
      </nav>
    </>
  )
}
