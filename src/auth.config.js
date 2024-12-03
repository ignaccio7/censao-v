import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const users = [
  { id: 1, name: 'Jose Castro', email: 'jose@google.com', password: '123' ,role: 'doctor' },
  { id: 2, name: 'Lucero Quispe', email: 'lucero@google.com', password: '123' ,role: 'administrative' },
  { id: 2, name: 'Maria Sanchez', email: 'maria@google.com', password: '123' ,role: 'nurse' },
  { id: 3, name: 'Pedro Perez', email: 'pedro@google.com', password: '123' ,role: 'user' },
]

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      // jwt se ejecuta cada vez que se necesita un token para la API
      // El valor de user solo esta disponible cuando hay un nuevo usuario (es decir, cuando se inicia sesión)
      if (user) {
        // Almacena la información del usuario en el token
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role
      }
      //console.log('jwtCallback', token, user);
      return token;
    },
    async session({ session, token }) {
      // Agrega la información del token a la sesión
      // Asignamos la informacion del token a la sesión para que sea accesible en todas las páginas del sitio
      session.user.id = token.id; // Agrega el ID del usuario a la sesión
      session.user.email = token.email; // Agrega el email a la sesión
      session.user.name = token.name; // Agrega el nombre a la sesión
      session.user.role = token.role; // Agrega el rol a la sesión
      //console.log('sessionCallback', session);
      return session;
    },
    async authorized({ auth }) {
      //console.log('authorizedCallback', auth);      
      return true;
    } 
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        //console.log('Credentials provider');
        //console.log(credentials);
        const { email, password } = credentials

        // Simulación de un usuario autenticado
        const user = users.find((u) => {
          return u.email === email && u.password === password;
        })

        if (!user) return null
        
        //console.log('Esta logeado ++++++++++++++++');
        
        return { id: user.id, email: user.email, name: user.name, role: user.role }; // Retorna un objeto de usuario completo        
      }
    })
  ]
});