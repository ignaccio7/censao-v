
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

export const reservations_in_hold = [
  {
    id: 2,
    patientId: 1,
    start: getDate(),
    end: getDateAdd(30),
    title: "Andy Perez"
  },
  {
    id: 3,
    patientId: 2,
    start: getDateAdd(30),    
    end: getDateAdd(60),
    title: "Raquel Perez"
  },
  {
    id: 4,
    patientId: 3,
    start: getDateAdd(60),    
    end: getDateAdd(90),
    title: "Jose Luis"
  }  
]

export const reservations_attended = [
  {
    id: 1,
    patientId: 1,
    start: getDateSubs(30),    
    end: getDate(),
    title: "Ismael Montes"
  }
]

export const treatments = [
  {
    "id": 1,
    "patientId": 1,
    "patientName": "Jose Luis Condori Chambi",
    "doctorId": 1,
    "date": getDate(),
    "description": "Vacuna contra la rabia",
    "status": "En seguimiento",
    "nextReservation": getDateAdd(1280)
  },
  {
    "id": 2,
    "patientId": 1,
    "patientName": "Jose Luis Condori Chambi",
    "doctorId": 1,
    "date": getDateSubs(1800),
    "description": "Vacuna contra la gripe",
    "status": 'Terminado',
    "nextReservation": ""
  },
  {
    "id": 3,
    "patientId": 2,
    "patientName": "Jose Luis Condori Chambi",
    "doctorId": 1,
    "date": getDateSubs(2280),
    "description": "Vacuna contra la poliomielitis",
    "status": 'Terminado',
    "nextReservation": ""
  },
  {
    "id": 4,
    "patientId": 3,
    "patientName": "Jose Luis Condori Chambi",
    "doctorId": 1,
    "date": getDateSubs(4520),
    "description": "Vacuna contra el Covid",
    "status": 'Terminado',
    "nextReservation": ""
  }
]
