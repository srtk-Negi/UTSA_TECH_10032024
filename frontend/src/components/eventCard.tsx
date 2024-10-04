import { Calendar, Clock, MapPin } from "lucide-react";

export interface EventInteface {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export const EventCard = ({ event }: { event: EventInteface }) => (
  <div className="rounded-lg shadow-md overflow-hidden m-5">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4" style={{ background: "#E2CCAF", color: "BFA37E" }}>
      <h3 className="text-xl font-semibold text-gray-600 mb-2">
        {event.title}
      </h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{event.date}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <Clock className="w-4 h-4 mr-2" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{event.location}</span>
      </div>
      <p className="text-gray-700 mt-2">{event.description}</p>
    </div>
  </div>
);
