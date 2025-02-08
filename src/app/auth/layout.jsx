export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 bg-gradient-to-t from-[#00558E] to-white">
      <h1 className="text-2xl text-gray-700">Ingresa tus credenciales!</h1>
      <main className="flex flex-col items-center justify-center w-full px-4 py-8 bg-white shadow-md rounded-lg max-w-md">
        {children}
      </main>
    </div>
  );
}