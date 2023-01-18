import './App.css';
import { useState } from 'react';
import Email from './components/Email';

function App() {
  const [email, setEmail] = useState({ id: 1, title: 'titulo do email', status: 0 })
  

  return (
    <div className="App">
      <Email state={ { email, setEmail } } />
     </div>
  );
}

export default App;
