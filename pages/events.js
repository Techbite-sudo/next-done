import { useState, useEffect } from "react"

export default function EventsList({ eventsList }){

    const [events, setEvents] = useState(eventsList)
    const fetchSportsEvents = async () => {
        const response = await fetch(`http://localhost:4000/events?category=Sports`)
        const data = await response.json()
        setEvents(data)
    }
    return(
        <div>
            <h1>List of Events</h1>

            <button onClick={fetchSportsEvents}>
                Sports Events
            </button>

            {events.map((event) => {
                return(
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} {event.category}</h2>
                        <p>{event.description}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/events')
    const data = await response.json()

    return{
        props:{
            eventsList: data
        }
    }
}