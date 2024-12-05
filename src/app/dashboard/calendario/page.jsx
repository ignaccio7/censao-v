"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import esLocale from '@fullcalendar/core/locales/es';
import { useEffect, useState } from 'react'

const initialEvents = [
  { title: 'Paciente 1', start: new Date().toISOString(), end: '2024-12-05T09:30:00' },
  { title: 'Paciente 2', start: '2024-12-05T09:30:00', end: '2024-12-05T10:00:00' },
];

const handleDateClick = (info) => {
  alert(info.event.title)
}
// Decidimos como se va a mostrar el calendario
function renderEventContent(eventInfo) {

  // const renderedContent = eventInfo.event.title === 'Meeting' ? 'Reunion' : 'Meeting'

  return (
    <>
      {/* <b>{eventInfo.timeText}</b> */}
      <i>{eventInfo.event.title}</i>
      {/* <b>{renderedContent}</b> */}
    </>
  )
}


function handleDateSelect(selectInfo) {
  let title = prompt('Please enter a new title for your event')

  let calendarApi = selectInfo.view.calendar

  calendarApi.unselect() // clear date selection
  console.log(selectInfo);


  if (title) {
    calendarApi.addEvent({
      // id: createEventId(),
      id: crypto.randomUUID(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}

export default function Calendario() {

  const [events, setEvents] = useState(initialEvents)

  useEffect(() => {
    console.log('USEEFFECT IN CALENDARIO');
    console.log(events);


    fetch('/api/reservations')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEvents(data.reservations)
      })
  }, [])

  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='w-full h-auto px-4'>
        {/* TimegridPlugin nos permite ver los dias y semana con horarios
      es asi que podemos usar en el headerToolbar de fullcalendar
      las opciones de timeGridDay y timeGridWeek */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridDay,timeGridWeek'
          }}
          locale={esLocale}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          eventContent={renderEventContent}
          eventClick={handleDateClick}
          select={handleDateSelect}
          slotDuration='00:30:00'
        />
      </div>

      <br /><br /><br /><br /><br />
    </div>
  )
}