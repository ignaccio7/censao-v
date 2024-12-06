
export function FormPatient() {
  return (
    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Completo</label>
          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite su nombre completo" required="" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite su correo" required="" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
          <input type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite su telefono" required="" />
        </div>
        <div className="col-span-2">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite su contraseña" required="" />
        </div>
      </div>
      <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
        Registrar Ficha
      </button>
    </form>
  )
}