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
            role === 'patient' && (
              <>
                <li>
                  <Link
                    href="/dashboard/tratamientos"
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                ${pathname === '/dashboard/tratamientos' ? 'bg-gray-700' : ''}`}
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 10H14C12.9391 10 11.9217 10.4214 11.1716 11.1716C10.4214 11.9217 10 12.9391 10 14V38C10 39.0609 10.4214 40.0783 11.1716 40.8284C11.9217 41.5786 12.9391 42 14 42H34C35.0609 42 36.0783 41.5786 36.8284 40.8284C37.5786 40.0783 38 39.0609 38 38V14C38 12.9391 37.5786 11.9217 36.8284 11.1716C36.0783 10.4214 35.0609 10 34 10H30M18 10C18 8.93913 18.4214 7.92172 19.1716 7.17157C19.9217 6.42143 20.9391 6 22 6H26C27.0609 6 28.0783 6.42143 28.8284 7.17157C29.5786 7.92172 30 8.93913 30 10M18 10C18 11.0609 18.4214 12.0783 19.1716 12.8284C19.9217 13.5786 20.9391 14 22 14H26C27.0609 14 28.0783 13.5786 28.8284 12.8284C29.5786 12.0783 30 11.0609 30 10M23.986 33.5L29.48 27.87C30.1596 27.1623 30.5391 26.2191 30.5391 25.238C30.5391 24.2568 30.1596 23.3137 29.48 22.606C29.1487 22.2612 28.7512 21.9868 28.3113 21.7994C27.8714 21.612 27.3981 21.5154 26.92 21.5154C26.4418 21.5154 25.9686 21.612 25.5287 21.7994C25.0888 21.9868 24.6913 22.2612 24.36 22.606L23.994 22.982L23.628 22.604C23.2967 22.2592 22.8992 21.9848 22.4593 21.7974C22.0194 21.61 21.5461 21.5134 21.068 21.5134C20.5898 21.5134 20.1166 21.61 19.6767 21.7974C19.2368 21.9848 18.8393 22.2592 18.508 22.604C17.8279 23.3114 17.4481 24.2547 17.4481 25.236C17.4481 26.2173 17.8279 27.1605 18.508 27.868L23.984 33.518L23.986 33.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">Tratamientos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/perfil"
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                ${pathname === '/dashboard/perfil' ? 'bg-gray-700' : ''}`}
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 42V38C12 35.8783 12.8429 33.8434 14.3431 32.3431C15.8434 30.8429 17.8783 30 20 30H28C30.1217 30 32.1566 30.8429 33.6569 32.3431C35.1571 33.8434 36 35.8783 36 38V42M16 14C16 16.1217 16.8429 18.1566 18.3431 19.6569C19.8434 21.1571 21.8783 22 24 22C26.1217 22 28.1566 21.1571 29.6569 19.6569C31.1571 18.1566 32 16.1217 32 14C32 11.8783 31.1571 9.84344 29.6569 8.34315C28.1566 6.84285 26.1217 6 24 6C21.8783 6 19.8434 6.84285 18.3431 8.34315C16.8429 9.84344 16 11.8783 16 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                    <span className="flex-1 ms-3 whitespace-nowrap">Mi Perfil</span>
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