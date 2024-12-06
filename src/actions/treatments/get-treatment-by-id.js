"use server"

import { treatments } from "@/data/db"

export async function getTreatmentById(id) {
  console.log('id', id);  
  const treatment = treatments.find(treatments => treatments.id === +id)
  console.log('treatment', treatment);
  return treatment
}