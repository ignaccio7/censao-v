
import { auth, signOut } from "@/auth.config";

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <h1 className="text-4xl">Home page</h1>
      <p>
        {JSON.stringify(session)}
      </p>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button>
          Logout
        </button>
      </form>
    </div>
  );
}
