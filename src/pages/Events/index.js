import React from "react";
import MainLayout from "../../layouts/MainLayout";
import "./style.scss";
import events from '../../json/events.json';

export default function EventsPage() {
  return (
    <>
      <MainLayout title="SemiKolan | Never Stop Building">
        <div className="eventspage">
          <div className="pagetitle">
            <h1>Events</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adip</span>
          </div>

          <div className="container">
            {
              events.map((event, index) => {
                return (
                  <div className="eventbody" key={index}>
                    <div className="eventimage">
                      <img src={require("../../assets/images/events/"+event.cover_image).default} alt={event.title} />
                    </div>
                    <div className="eventcontent">
                      <h2>{event.title}</h2>
                      <p>{event.desc}</p>
                      <div>

                      <a href={event.registration_link} className="button"> {event.registration_text}</a>
                      <a href={event.event_link} className="button"> Join </a>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </MainLayout>
    </>
  );
}
