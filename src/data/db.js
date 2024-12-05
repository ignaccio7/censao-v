
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
    "name": "Jose Luis Condori Chambi",
    "email": "joseluis@google.com",
    "password": "123",
    "role": "patient"
  }
]
function getDate() {
  return new Date()
}
function getDateAdd(time) {
  const d = new Date()
  d.setMinutes(d.getMinutes() + time)
  return d
}
function getDateSubs(time) {
  const d = new Date()
  d.setMinutes(d.getMinutes() - time)
  return d
}

export const reservations = [
  {
    id: 1,
    patientId: 1,
    start: getDate(),
    end: getDateAdd(30),
    title: "Andy Perez"
  },
  {
    id: 2,
    patientId: 2,
    start: getDateAdd(30),    
    end: getDateAdd(60),
    title: "Raquel Perez"
  },
  {
    id: 3,
    patientId: 3,
    start: getDateAdd(60),    
    end: getDateAdd(90),
    title: "Jose Luis"
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
