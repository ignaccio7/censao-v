import { NextResponse } from "next/server"
import { patients } from '@/data/db.js'

export async function GET(request) {  
  // console.log(patients);  
  // console.log(request);
  
  return NextResponse.json({ success: true, patients })
}

export async function POST(request) {
  const { name, email, password } = await request.json()
  console.log(name, email, password);

  patients.push({ name, email, password, id: patients.length + 1, role: 'patient' })
  return NextResponse.json({ success: true })
}