import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Maps from './components/Maps'

function App() {
  return (
    <div>

    <BrowserRouter>
    <Switch>
      <Route exact="/" component={ Login } />
      <Route exact="/map" component={ Maps } />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
