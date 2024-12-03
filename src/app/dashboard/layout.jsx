import { auth } from "@/auth.config"
import { Sidebar, TopMenu } from "@/components"
import { redirect } from "next/navigation"
import { SessionProvider } from "next-auth/react"
import Tratamientos from "./tratamientos/page"
import Pacientes from "./pacientes/page"

export default async function DashboardLayout({ children, params }) {

  const session = await auth()
  console.log('session', session);    

  if (!session || !session.user || !session.user.role) {
    redirect('/auth/login')
  }

  const role = session?.user?.role     
  
  const currentPath = new URL(request.url).pathname;
  console.log('params', currentPath);
  
  let content = children

  if (role === 'patient') {
    content = <Tratamientos />
  }

  return (
    <SessionProvider>

      <TopMenu />
      
      <Sidebar />

      <div className="p-4 sm:ml-64 mt-14">
        {content}
      </div>

    </SessionProvider>
  )
}