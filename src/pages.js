// responsible for all pages which are part of our app
import React from "react";
import { Link, useLocation } from "react-router-dom";

// some small components to be displayed as we navigate around the site
export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="about">Events</Link>
        <Link to="about">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  // useLocation is a hook which returns your current location
  let location = useLocation();
  console.log(location);

  return (
    <div>
      {/* We can tap into the pathname in the url using the useLocation hook*/}
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
