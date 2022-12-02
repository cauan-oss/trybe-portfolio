
function App() {
  return (
    <div className="container">
      <h1 className="title">teste projeto</h1>
      <div className="container-input">
        <label htmlFor="input-text">
         <input placeholder="Digite seu cep..." id="input-text" type="text" />
         <button className="button-search">Procurar</button>

        </label>
      </div>
    </div>
  );
}

export default App;
