import { EventCard } from "../components/eventCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { EventInteface } from "../components/eventCard";

const EventsPage = () => {
  const [events, setEvents] = useState<[EventInteface]>();

  useEffect(() => {
    axios
      .get("http://localhost:8000/events/events")
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Upcoming Community Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
