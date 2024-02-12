import React from "react";
import UserContext from "./GlobalContext";

const Produto = () => {
  const dados = React.useContext(UserContext);
  return <div>{dados.setProduto}</div>;
};

export default Produto;
