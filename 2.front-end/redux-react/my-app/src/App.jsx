import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
function App(props) {
  const { countState } = props;
  return (
    <div className="App">
      <h1>contador</h1>
      <h2>{countState}</h2>
      <button>Incrementar</button>
    </div>
  );
}
const mapStateProps = (state) => ({
  countState: state.count,
})
export default connect(mapStateProps)(App);
