import { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

class searchEnginee extends Component{
    render() {
  return (
    <div className="container">
      <h1 className="title">Buscador</h1>
      <div className="container-input">
        <label htmlFor="input-text">
         <input placeholder="Digite seu cep..." id="input-text" type="text" />
         <button className="button-search"> 
         <FiSearch size={25} color= 'light green'
         ></FiSearch>
         </button>
        </label>
      </div>
      <main className='main'>
        <h2> cep</h2>
        <span>logradouro</span>
        <span>complemento</span>
        <span>bairro</span>
        <span>localidade-estado</span>

      </main>
    </div>
  )};
}

export default searchEnginee;
