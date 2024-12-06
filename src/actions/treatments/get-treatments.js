"use server"

import { treatments } from "@/data/db"

export async function getTreatments() {
  return treatments
}