import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./style.scss";
import events from "../../json/events.json";
import supabase from "../../supabase";

export default function EventsPage() {
  const [email, setEmail] = useState("");
  const [event_name, setEventName] = useState("");
  const [event_desc, setEventDesc] = useState("");
  const [links, setLinks] = useState("");

  const submitResponse = async () => {
    const { data, error } = await supabase
      .from("event_suggestions")
      .insert([{ email, event_name, event_desc, links }]);
  };

  const getDate = (date) => {
    const dateObj = new Date(date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  return (
    <>
      <MainLayout title="SemiKolan | Never Stop Building">
        <div className="eventspage">
          <div className="pagetitle">
            <h1>Events</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adip</span>
          </div>

          <div className="container">
            {events.map((event, index) => {
              return (
                <div className="eventbody" key={index}>
                  <div className="eventimage">
                    <img
                      src={
                        require("../../assets/images/events/" +
                          event.cover_image).default
                      }
                      alt={event.title}
                    />
                  </div>
                  <div className="eventcontent">
                    <h2>{event.title}</h2>
                    <p>{event.desc}</p>
                    <span>
                      {event.type} | &nbsp;
                      {getDate(event.startdate)} - {getDate(event.enddate)}
                    </span>
                    <div>
                      {event.registration_open && (
                        <a href={event.registration_link} className="button">
                          {event.registration_text}
                        </a>
                      )}
                      <a href={event.event_link} className="button">
                        Join
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={submitResponse} className="suggestionform">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Event Name"
              value={event_name}
              onChange={(e) => setEventName(e.target.value)}
            />
            <textarea
              rows="4"
              required
              placeholder="Event Description"
              onChange={(e) => setEventDesc(e.target.value)}
            >
              {event_desc}
            </textarea>
            <input
              type="text"
              placeholder="Useful Links"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
            />
            <button type="submit">Suggest Event</button>
          </form>
        </div>
      </MainLayout>
    </>
  );
}
