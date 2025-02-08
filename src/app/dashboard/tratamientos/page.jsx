import { getTreatments } from "@/actions/treatments/get-treatments";
import Link from "next/link";

export default async function Tratamientos() {

  const treatments = await getTreatments()
  console.log('treatments', treatments);

  return (
    <div>
      <header className="flex justify-start items-center mb-4">
        <h1 className="text-3xl font-bold">Listado de Tratamientos</h1>
      </header>
      <div className="waiting mb-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#00558E] dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Fecha
                    <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Vacuna
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {
                treatments.map((treatment, index) => {
                  return (
                    <tr 
                      className="bg-white border-b dark:bg-white dark:border-gray-700"
                      key={treatment.id}
                    >
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        {treatment.date.toLocaleDateString()}
                      </th>
                      <td className="px-6 py-4 dark:text-black">
                        {treatment.description}
                      </td>
                      <td className={`${treatment.status === 'En seguimiento' ? 'dark:text-yellow-500' : 'dark:text-green-500'} 
                        px-6 py-4 text-left font-bold`}
                      >
                        <Link href={`/dashboard/tratamientos/${treatment.id}`}>
                          {treatment.status}
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}