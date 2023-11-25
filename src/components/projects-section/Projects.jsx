import React from "react";
import "./Projects.css";
import spring from "../../assets/spring.svg";
import meincraft from "../../assets/MEINECRAFT-2D.png";
import dice from "../../assets/dice-game.png";
import { Card } from "../card/card";

const projects = [
  {
    title: "Meincraft",
    imageSource: meincraft,
    description: "A simple 2d game of mining and shovelling using vanilla JS",
    links: [
      "https://github.com/zaid-kh/Minecraft-2D",
      "https://meincraft-2d.netlify.app/",
    ],
  },
  {
    title: "Order Management",
    imageSource: spring,
    description:
      "An order management system that handles orders built with Java Springboot",
    links: ["https://github.com/zaid-kh/order-management", "#"],
  },
  {
    title: "Dice Game",
    imageSource: dice,
    description:
      "A fun 2-player dice game where a player should hit 100 before his opponent",
    links: [
      "https://github.com/zaid-kh/WA-DiceGame",
      "https://wa-dicegame.netlify.app/",
    ],
  },
];

function List() {
  const listItems = projects.map((project, index) => (
    <Card
      key={index} // Provide a unique key for each Card component
      title={project.title}
      imageSource={project.imageSource}
      description={project.description}
      links={project.links}
    />
  ));

  return <>{listItems}</>; // Render the list of cards
}

export const Projects = () => {
  return (
    <section className="projects">
      <h2 id="projects">Projects</h2>
      <section className="card-container">{List()}</section>
    </section>
  );
};
