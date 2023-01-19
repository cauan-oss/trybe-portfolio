import { Provider } from "react-redux";
import "./App.css";
import Cep from "./components/Cep";
function App() {
  return (
    <div className="App">
      <Provider>
        <Cep />
      </Provider>
    </div>
  );
}

export default App;
