import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }
  return (
    <div>
      <Header />
      <Component />
    </div>
  );
};

export default App;
