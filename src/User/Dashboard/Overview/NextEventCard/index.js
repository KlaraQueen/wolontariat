import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import {
  EventPanel,
  EventHeader,
  EventIcon,
  EventTitle,
  EventEmpty,
  EventMeta,
} from "./styled";

export const NextEventCard = ({ event }) => (
  <EventPanel aria-labelledby="next-event-title">
    <EventHeader>
      <EventIcon><CalendarDays aria-hidden="true" /></EventIcon>
      <div>
        <p>Najbliższa aktywność</p>
        <EventTitle id="next-event-title">{event?.title || "Nie masz jeszcze wydarzenia"}</EventTitle>
      </div>
    </EventHeader>
    {event ? (
      <EventMeta>
        <span>{event.date}</span>
        <span><MapPin aria-hidden="true" />{event.location}</span>
      </EventMeta>
    ) : (
      <EventEmpty>
        Gdy koordynator przypisze Ci kwestę lub wydarzenie, szczegóły pojawią się tutaj.
      </EventEmpty>
    )}
  </EventPanel>
);
