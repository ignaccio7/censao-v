"use client"

import { logout } from "@/actions/auth/logout"
import { useState } from "react"
import { useSession } from "next-auth/react"

export function TopMenu() {

  const [showInfo, setShowInfo] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const { data: session } = useSession()

  const handleLogout = async () => {
    await logout()
    // window.location.href = '/auth/login'
  }

  console.log('SALIENDO DE LA SESSION');
  console.log(session);


  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-[#0099FF] dark:border-[#0099FF]">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <a href="" className="flex ms-2 md:me-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">CS-AltoObrajes</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div className="flex gap-4 items-center">
                {/* Button for notifications */}
                {
                  (session?.user?.role === 'patient') && (
                    <button className="text-white relative" type="button" onClick={() => setShowNotifications(!showNotifications)}>
                      <div className="absolute inset-0 border border-gray-300 rounded-full animate-ping"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-bell-ringing"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.451 2.344a1 1 0 0 1 1.41 -.099a12.05 12.05 0 0 1 3.048 4.064a1 1 0 1 1 -1.818 .836a10.05 10.05 0 0 0 -2.54 -3.39a1 1 0 0 1 -.1 -1.41z" /><path d="M5.136 2.245a1 1 0 0 1 1.312 1.51a10.05 10.05 0 0 0 -2.54 3.39a1 1 0 1 1 -1.817 -.835a12.05 12.05 0 0 1 3.045 -4.065z" /><path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /><path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" /></svg>
                      <span className="px-1 block rounded-full bg-red-700 text-white font-bold absolute bottom-0 right-0 text-xs">1</span>
                    </button>
                  )
                }
                {/* User profile dropdown */}
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                </button>
              </div>
              <div
                className={`z-50 absolute right-0 top-8 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 
                  ${showInfo ? 'block' : 'hidden'}`}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-900 dark:text-white" role="none">
                    {session?.user?.name}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    {session?.user?.email}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  {/* <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Mi perfil</a>
                  </li> */}
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem"
                      onClick={handleLogout}
                    >
                      Salir
                    </a>
                  </li>
                </ul>
              </div>

              {/* Notifications */}
              <div
                className={`z-50 absolute right-0 top-8 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 
                  ${showNotifications ? 'block' : 'hidden'}`}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-900 dark:text-white font-semibold" role="none">
                    Tienes una cita Programada para Mañana
                  </p>
                </div>
              </div>
              {/* Notifications */}

            </div>
          </div>
        </div>
      </div>
    </nav >
  )
}