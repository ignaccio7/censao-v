import { auth } from "@/auth.config"
import { Sidebar, TopMenu } from "@/components"
import { redirect } from "next/navigation"
import { SessionProvider } from "next-auth/react"

export default async function DashboardLayout({ children }) {

  const session = await auth()

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <SessionProvider>

      <TopMenu />
      
      <Sidebar />

      <div className="p-4 sm:ml-64 mt-14">
        {children}
      </div>

    </SessionProvider>
  )
}