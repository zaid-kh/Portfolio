import React from "react";
import "./card.css";

export function Card(props) {
  console.log("links: ", props.links);
  return (
    <div className="card">
      <img src={props.imageSource} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="links">
        <a href={props.links[0]} className="link">
          Github Repo
        </a>
      </div>
    </div>
  );
}
