import React, { useState } from "react";

function App() {
  let [activeDoor, setActiveDoor] = useState("");

  const portaAzul = {
    background: activeDoor === "azul" ? "blue" : "transparent"
  };

  const portaVerde = {
    background: activeDoor === "verde" ? "green" : "transparent"
  };

  const portaLaranja = {
    background: activeDoor === "laranja" ? "orange" : "transparent"
  };

  let BlueClick = () => {
    setActiveDoor("azul");
  };

  let GreenClick = () => {
    setActiveDoor("verde");
  };

  let OrangeClick = () => {
    setActiveDoor("laranja");
  };

  let ResetClick = () => {
    setActiveDoor("");
  };

  return (
    <main className="main">
      <h1>Jogo das Portas</h1>
      <h2>Clica numa porta para modificar a porta activa!</h2>
      <h3>Porta activa: nenhuma</h3>
      <ul className="doors">
        <li style={portaAzul}>
          <img src="/images/blue-door.png" alt="Porta azul" />
          <button onClick={BlueClick}>Activar porta azul</button>
        </li>
        <li style={portaVerde}>
          <img src="/images/green-door.png" alt="Porta verde" />
          <button onClick={GreenClick}>Activar porta verde</button>
        </li>
        <li style={portaLaranja}>
          <img src="/images/orange-door.png" alt="Porta laranja" />
          <button onClick={OrangeClick}>Activar porta laranja</button>
        </li>
      </ul>
      <button onClick={ResetClick} className="resetButton">
        Reset
      </button>
    </main>
  );
}

export default App;
