export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4">
      <h1>Ingresa tus credenciales!</h1>
      <main className="flex flex-col items-center justify-center w-full px-4 py-8 bg-gray-800 shadow-md rounded-lg max-w-md">
        {children}
      </main>
    </div>
  );
}