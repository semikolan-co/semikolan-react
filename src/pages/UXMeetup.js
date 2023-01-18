import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UXLanding from "../component/UXLanding";
import MainLayout from "../layouts/MainLayout";

export default function UXMeetup() {
  return (
    <>
      <MainLayout title="UX Meetup | SemiKolan">
      <UXLanding
          lottiename="uxmeetup"
          redirect="#ux-meetup"
          p1="Bringing to you the Bhopal’s first ever UX meetup!"
          p2="Bhopal UX Meetup"
          p3="On 28th Feb 2023"
          buttontext="Explore"
        />
      </MainLayout>
    </>
  );
}
