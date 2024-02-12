import React from "react";
import UserContext from "./GlobalContext";
import Produto from "./Produto";

const App = () => {
  return (
    <UserContext.Provider value={{ nome: "André" }}>
      <Produto />
    </UserContext.Provider>
  );
};

export default App;
