import React from "react";
import MainLayout from "../../layouts/MainLayout";
import "./style.scss";
import events from "../../json/events.json";

export default function EventsPage() {
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
                    <h2>
                      {event.title}
                    </h2>
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

          <div className="suggestionform">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Event Name" />
            <textarea rows="4" placeholder="Event Description"></textarea>
            <input type="text" placeholder="Useful Links" />
            <button>Submit</button>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
