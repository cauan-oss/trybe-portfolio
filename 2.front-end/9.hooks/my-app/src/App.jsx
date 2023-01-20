import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div id="alinha" >
      <h1>TrybeMail</h1>
      <button type="button">
        Marcar todas como lida
      </button>
      <button type="button">Marcar todas como nao lida</button>
      <div></div>
    </div>
  );
}

export default App;
