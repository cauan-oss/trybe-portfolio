import  Provider  from "./context/Provider";
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
