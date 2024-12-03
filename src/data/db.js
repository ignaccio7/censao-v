
export const doctors = [
  {
    "id": 1,
    "name": "Jose Castro",
    "email": "jose@google.com",
    "password": "123",
    "role": "doctor"
  }
]
export const administrative = [
  {
    "id": 1,
    "name": "Lucero Quispe",
    "email": "lucero@google.com",
    "password": "123",
    "role": "administrative"
  }
]
export const nurses = [
  {
    "id": 1,
    "name": "Maria Sanchez",
    "email": "maria@google.com",
    "password": "123",
    "role": "nurse"
  }
]
export const patients = [
  {
    "id": 1,
    "name": "Andy Perez",
    "email": "andy@google.com",
    "password": "123",
    "role": "patient"
  },
  {
    "id": 2,
    "name": "Raquel Perez",
    "email": "raquel@google.com",
    "password": "123",
    "role": "patient"
  },
  {
    "id": 3,
    "name": "Sandra Choque",
    "email": "sandra@google.com",
    "password": "123",
    "role": "patient"
  }
]
export const reservations = [
  {
    "id": 1,
    "patientId": 1,
    "date": "2024-12-03",
    "time": "08:00",
    "turn": "day"
  },
  {
    "id": 2,
    "patientId": 2,
    "date": "2024-12-03",
    "time": "08:30",
    "turn": "day"
  },
  {
    "id": 3,
    "patientId": 1,
    "date": "2024-12-03",
    "time": "14:00",
    "turn": "late"
  }
]
export const treatments = [
  {
    "id": 1,
    "patientId": 1,
    "doctorId": 1,
    "date": "2023-01-01",
    "description": "Vacuna contra la rabia"
  },
  {
    "id": 2,
    "patientId": 1,
    "doctorId": 1,
    "date": "2023-02-01",
    "description": "Vacuna contra la gripe"
  },
  {
    "id": 3,
    "patientId": 2,
    "doctorId": 1,
    "date": "2023-03-01",
    "description": "Vacuna contra la poliomielitis"
  },
  {
    "id": 4,
    "patientId": 3,
    "doctorId": 1,
    "date": "2023-04-01",
    "description": "Vacuna contra la poliomielitis"
  }
]
