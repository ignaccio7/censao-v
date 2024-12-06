import { getTreatmentById } from "@/actions/treatments/get-treatment-by-id"

export default async function Tratamiento({ params }) {

  const { id } = await params
  const treatment = await getTreatmentById(id)

  return (
    <div className="max-w-3xl mx-4 text-xl">
      <div className={`${treatment.status === 'Terminado' ? 'bg-green-500' : 'bg-yellow-500'}
        p-4 rounded-tr-lg rounded-tl-lg text-white font-bold text-center`}>
        {treatment.status}
      </div>
      <div className="content px-4 py-6 border border-gray-400 border-t-0 rounded-bl-lg rounded-br-lg">
        <h2 className="font-semibold">Nombre:</h2>
        <p className="text-gray-700">{treatment.patientName}</p>
        <h2 className="mt-4 font-semibold">Fecha:</h2>
        <p className="text-gray-700">{treatment?.date?.toLocaleDateString()}</p>
        <h2 className="mt-4 font-semibold">Descripción:</h2>
        <p className="text-gray-700">{treatment.description}</p>
        <h2 className="mt-4 font-semibold">Estado:</h2>
        <p className="text-gray-700">{treatment.status}</p>
        <h2 className="mt-4 font-semibold">Siguiente Cita:</h2>
        <p className="text-gray-700">{treatment.nextReservation !== '' ? treatment.nextReservation?.toLocaleDateString() : 'Termino su Tratamiento' }</p>
      
      </div>
    </div >
  )
}