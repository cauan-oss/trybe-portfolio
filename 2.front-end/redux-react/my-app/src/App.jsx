import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { actionCreator } from './redux/actions'
function App(props) {
  const { countState, dispatch } = props;
  return (
    <div className="App">
      <h1>contador</h1>
      <h2>{countState}</h2>
      <button onClick={() => dispatch(actionCreator())}>Incrementar</button>
    </div>
  );
}
const mapStateProps = (state) => ({
  countState: state.count,
})
export default connect(mapStateProps)(App);
