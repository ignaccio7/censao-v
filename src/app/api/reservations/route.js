
import { patients, reservations_in_hold } from "@/data/db";
import { NextResponse } from "next/server";

import { revalidatePath } from "next/cache";


export async function GET(request) {
  return NextResponse.json({ success: true, reservations_in_hold });
}

export async function POST(request) {
  const data = await request.json()
  console.log('data in server post', data)
  const start = reservations_in_hold[reservations_in_hold.length - 1].end;
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + 30);

  reservations_in_hold.push({
    id: reservations_in_hold.length + 1,
    patientId: patients.length + 1,
    start,    
    end,
    title: data.name
  })
  
  revalidatePath('/dashboard/')
  
  return NextResponse.json({ success: true, data });
  
}