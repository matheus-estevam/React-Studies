import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem("preferido");
    console.log("Aconteceu um memo");
    return localItem;
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
