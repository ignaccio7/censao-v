"use client"
import { login } from "@/actions/auth/login";
import { useEffect, useState } from "react";

export default function Login() {

  const [state, setState] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log('formData', Object.fromEntries(formData));
    try {
      const res = await login(formData)
      console.log('res', res);
      setState(res)
    } catch (error) {
      console.log('error');
      alert('Fallo al conectarse con el servidor')
    }
        
  }

  useEffect(() => {
    if(state === 'Success'){
      window.location.href = '/dashboard'
    }
  }, [state])

  return (
    <div className="w-full px-0 md:px-4">
      <h1 className="text-2xl text-white pb-4">Inicia sesión</h1>
      <form 
        className="mx-auto w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu usuario</label>
          <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
          <input defaultValue={123} type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

      {
        state === 'CredentialsSignin' && <div className="text-red-500">Credenciales Invalidas</div>
      }

    </div>
  );
}