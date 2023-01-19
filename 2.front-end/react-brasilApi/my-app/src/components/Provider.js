import { useEffect, useState } from "react";
import brasilContext from "../brasilContext";
import PropTypes from 'prop-types';

function Provider ({ children }) {
    const[cep, setCep] = useState([]);

    const renderAPI = async () => {
    const api =  await fetch('https://brasilapi.com.br/api/cep/v1/{cep}');
    const apiJson  = await api.json()
    setCep(apiJson);
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
