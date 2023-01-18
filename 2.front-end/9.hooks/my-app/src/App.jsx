import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div >
      <h1>{ counter }</h1>
      <button type="button" onClick={ () => setCounter( counter + 1) }>
        increase counter
      </button>
    </div>
  );
}

export default App;
