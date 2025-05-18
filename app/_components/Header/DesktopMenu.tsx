"use client"

import DesktopThemeSwitcher from './DesktopThemeSwitcher'
import { CartSVG } from '@/app/_assets/CartSVG'
import HeartSVG from '@/app/_assets/HeartSVG'
import HeaderLink from './HeaderLink'
import { useState } from 'react'
import ChevronSVG from '@/app/_assets/ChevronSVG'

export default function DesktopMenu() {

const [showCategories, setShowCategories] = useState<boolean>(false)

return (
    <>

        <div className='w-3/4 flex flex-col gap-2'>

            <Searchbar />

            <div>
                <nav className='sm:flex space-x-8 hidden'>
                    
                    <HeaderLink href={"/favorites"}>
                    <span>Favoritos</span>
                    <HeartSVG className="size-4"/>
                    </HeaderLink>

                    <HeaderLink href={"/cart"}>
                    <span>Carrito</span>
                    <CartSVG className="size-4"/>
                    </HeaderLink>
                
                    <button className='flex gap-2 items-center justify-center cursor-pointer hover:text-[var(--color-primary)]'
                        onClick={() => setShowCategories(prev => !prev)}
                    >
                        Categoria 
                        <ChevronSVG className={`size-4 ${showCategories ? "-rotate-90": "rotate-90"}`}/>
                    </button>

                    <HeaderLink href={"/about"}>
                        <span>Nosotros</span>
                    </HeaderLink>
                    
                    <DesktopThemeSwitcher />

                </nav>
            </div>

            {showCategories && <CategoriesContainer />}

        </div>

    </>
)
}

const Searchbar = () => {
    return (
        <input className='bg-white w-3/4 rounded-lg px-4 py-2' placeholder='search' type="text" />
    )
}

const CategoriesContainer = () => {
    return (
        <div>categories</div>
    )
}