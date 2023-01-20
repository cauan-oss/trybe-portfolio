import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import brasilContext from "./brasilContext";

function Provider ({ children }) {
    const[cep, setCep] = useState([]);

      const renderAPI = async () => {
    const api =  await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const apiJson  = await api.json()
    setCep(apiJson)
    } 

    useEffect(() => {
      renderAPI();
    }, []) 
    
  return(
    <brasilContext.Provider value={ cep } >
    {children}
    </brasilContext.Provider>
  );
}

Provider.propTypes = {
    children: PropTypes.isRequired,
  };
  

export default Provider;
