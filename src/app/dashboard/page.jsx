export const dynamic = "force-dynamic"
import { ButtonModal, Modal } from "@/components/ui/modal/Modal";
import { reservations_attended, reservations_in_hold } from "@/data/db";

export default async function Dashboard() {

  return (
    <div>
      <Modal />
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Listado de Pacientes</h1>
        <ButtonModal>Registrar nuevo Paciente</ButtonModal>
      </header>
      <div className="waiting mb-10">
        <h2 className="text-2xl font-bold">Pacientes en Espera</h2>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Nro
                    <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre Paciente
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {
                reservations_in_hold.map((reservation, index) => {
                  const now = new Date()
                  const text = reservation.start > now ? "En espera" : "En Atencion"
                  return (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4 dark:text-white">
                        {reservation.title}
                      </td>
                      <td className={`${text === 'En Atencion' ? 'dark:text-green-500' : 'dark:text-yellow-500'} px-6 py-4 text-left font-bold`}>
                        {`${text} - ${reservation.start.toLocaleTimeString()}`}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>
      <div className="attended">
        <h2 className="text-2xl font-bold">Pacientes Atendidos</h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Nro
                  <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg></a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre Paciente
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {
              reservations_attended.map((reservation, index) => {
                return (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4 dark:text-white">
                      {reservation.title}
                    </td>
                    <td className="px-6 py-4 text-left dark:text-slate-100 font-bold">
                      {`Atendido - ${reservation.start.toLocaleTimeString()}`}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}