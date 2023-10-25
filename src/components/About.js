import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  const passedBio = props.bio

  return (
    <div id="about">
      <h2>About Me</h2>
      {passedBio ? <p>{props.bio}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links gitLink = {user.links.github} linkLink = {user.links.linkedin}/>
    </div>
  );
}

export default About;
