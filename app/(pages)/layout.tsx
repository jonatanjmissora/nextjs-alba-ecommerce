import Footer from "../_components/Footer"
import "../_styles/global.css"
import Header from "../_components/Header/Header"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: 'Nav + Theme',
  description: 'App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="body-layout">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col">

            {children}

          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

