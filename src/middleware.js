import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

// Secreto utilizado por NextAuth para firmar y verificar los tokens
const secret = process.env.AUTH_SECRET;

export async function middleware(req) {
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  // Redirige a la página de login si no hay un token y el usuario intenta acceder a una ruta protegida
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Verificar roles y permisos según las URLs permitidas
  const role = token?.role;
  const permissionsUrls = {
    administrative: ['/dashboard', '/dashboard/calendario', '/auth/login'],
    patient: ['/dashboard/tratamientos', '/dashboard/perfil', '/auth/login'],
    nurse: ['/dashboard/pacientes', '/dashboard/tratamientos', '/dashboard/perfil', '/auth/login'],
    doctor: ['/dashboard', '/dashboard/pacientes', '/dashboard/tratamientos', '/dashboard/perfil', '/dashboard/almacen', '/dashboard/calendario', '/auth/login']
  };

  if (pathname.startsWith('/dashboard') && (role === 'patient' || role === 'doctor') && pathname.startsWith('/dashboard/tratamientos/') ) {
    return NextResponse.next();
  }

  // Si el usuario está autenticado pero intenta acceder a una página fuera de su rol
  if (pathname.startsWith('/dashboard') && role && !permissionsUrls[role]?.includes(pathname)) {
    return NextResponse.redirect(new URL(permissionsUrls[role][0], req.url));
  }

  // Si todo está bien, deja pasar la solicitud
  return NextResponse.next();
}

// Configuración del matcher para proteger solo las rutas específicas
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], // No protege rutas de API ni recursos estáticos
};
