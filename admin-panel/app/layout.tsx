import '../styles/globals.css'
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <div className="container">
          <Sidebar />
          <main className="main">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}