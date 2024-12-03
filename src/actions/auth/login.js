"use server"
import { signIn } from "@/auth.config";

export async function login(formData) {
  console.log('login');  
  console.log('formData', formData);
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData.entries()),
      redirect: false
    });
    return 'Success'    
  } catch (error) {    
    return 'CredentialsSignin'
  }
}