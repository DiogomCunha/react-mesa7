import { useState } from "react";

function item() {
  const [numero, setNumero] = useState([]);

  function handleClick() {
    setNumero([...numero, numero.length + 1]);
  }
  return (
    <div>
      <ul>
        {numero.map((numero, index) => (
          <li key={index}> O Item {numero} foi adionado!</li>
        ))}
      </ul>

      <button onClick={handleClick}> Clique </button>
    </div>
  );
}
export default item; 