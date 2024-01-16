import React from "react";
import Titulo from "./Titulo";

const Home = ({ cor }) => {
  return (
    <section>
      <Titulo texto="Home" />
      <p>Essa é a home do site</p>
    </section>
  );
};

export default Home;
