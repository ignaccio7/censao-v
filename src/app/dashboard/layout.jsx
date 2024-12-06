import { auth } from "@/auth.config"
import { Sidebar, TopMenu } from "@/components"
import { redirect } from "next/navigation"
import { SessionProvider } from "next-auth/react"
import { ChatWhatsapp } from "@/components/patient/ReservationChat"

export default async function DashboardLayout({ children }) {

  const session = await auth()
  console.log('VERIFICANDO LA SESSION');
  console.log('session', session);

  if (!session || !session.user || !session.user.role) {
    redirect('/auth/login')
  }

  const role = session?.user?.role

  let content = children

  return (
    <SessionProvider>

      <TopMenu />

      <Sidebar />

      <div className="p-4 sm:ml-64 mt-14">
        {content}
      </div>

      {role === 'patient' && (<ChatWhatsapp />)}

    </SessionProvider>
  )
}