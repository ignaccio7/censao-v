"use server"

import { patients } from "@/data/db"

export async function getPatients() {
  return patients
}