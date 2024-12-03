"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export function Sidebar() {

  const [role, setRole] = useState('administrative')

  const pathname = usePathname()
  console.log(pathname)

  const { data: session } = useSession()
  console.log('sessionSidebar', session);
  console.log(session?.user?.role);
  
  
  
  useEffect(() => {
    setRole(session?.user?.role)
  }, [session])

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">

          {
            role === 'administrative' && (
              <>
                <li>
                  <Link
                    href="/dashboard"
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
              ${pathname === '/dashboard' ? 'bg-gray-700' : ''}`}
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 37.9999C21.2637 36.4201 18.1597 35.5884 15 35.5884C11.8403 35.5884 8.73635 36.4201 6 37.9999V11.9999C8.73635 10.4201 11.8403 9.58838 15 9.58838C18.1597 9.58838 21.2637 10.4201 24 11.9999M24 37.9999C26.7363 36.4201 29.8403 35.5884 33 35.5884C36.1597 35.5884 39.2637 36.4201 42 37.9999V11.9999C39.2637 10.4201 36.1597 9.58838 33 9.58838C29.8403 9.58838 26.7363 10.4201 24 11.9999M24 37.9999V11.9999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Reservas</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/calendario"
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                ${pathname === '/dashboard/calendario' ? 'bg-gray-700' : ''}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M11 15h1" /><path d="M12 15v3" /></svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Calendario</span>
                  </Link>
                </li>
              </>
            )
          }

          {
            role === 'nurse' && (
              <>
                <li>
                  <Link
                    href="/dashboard/pacientes"
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                ${pathname === '/dashboard/pacientes' ? 'bg-gray-700' : ''}`}
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 42V38C12 35.8783 12.8429 33.8434 14.3431 32.3431C15.8434 30.8429 17.8783 30 20 30H24M44 32C44 40 39 44 37 44C35 44 30 40 30 32C32 32 35 31 37 29C39 31 42 32 44 32ZM16 14C16 16.1217 16.8429 18.1566 18.3431 19.6569C19.8434 21.1571 21.8783 22 24 22C26.1217 22 28.1566 21.1571 29.6569 19.6569C31.1571 18.1566 32 16.1217 32 14C32 11.8783 31.1571 9.84344 29.6569 8.34315C28.1566 6.84285 26.1217 6 24 6C21.8783 6 19.8434 6.84285 18.3431 8.34315C16.8429 9.84344 16 11.8783 16 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Pacientes</span>
                  </Link>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </aside>

  )
}