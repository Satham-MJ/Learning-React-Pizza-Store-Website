import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
          ultrices urna. Proin fringilla gravida felis a ullamcorper. Maecenas
          egestas risus id ultrices scelerisque. Donec vel ligula quis nunc
          sodales consequat. Mauris quis mi aliquet, vehicula neque sed, sodales
          eros. Sed rutrum, metus quis consequat cursus, ante tellus aliquam ex,
          id ultricies quam metus non nisi. Curabitur quis massa sed nulla
          condimentum maximus ut id odio.
        </p>
      </div>
    </div>
  );
};

export default About;
