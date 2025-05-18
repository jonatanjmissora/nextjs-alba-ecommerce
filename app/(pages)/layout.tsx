import Footer from "../_components/Footer"
import "../_styles/global.css"
import Header from "../_components/Header/Header"
import { ThemeProvider } from "next-themes"
import { getProducts } from "../_data/getProducts"
import { ProductsContextProvider } from "../_context/products-context-provider"

export const metadata = {
  title: 'Alba Ecommerce',
  description: 'Tu tienda online de confianza con los mejores productos',
  keywords: 'ecommerce, tienda online, productos, compras online',
  authors: [{ name: 'Alba Ecommerce' }],
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen body-layout">
            <Header />
            <main className="flex-1 mx-auto py-8 w-full">
              <ProductsContextProvider>
                {children}
              </ProductsContextProvider>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

