
import { signOut } from "next-auth/react";

export async function logout() {
  console.log('abc');
  signOut()
  // return signOut()
}