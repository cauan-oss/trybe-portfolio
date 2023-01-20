import { connect } from 'react-redux';
import './App.css';
import { actionCreator } from './redux/actions';

function App(props) {
  const { countState, dispatch } = props;
  return (
    <div className="App">
     <h1>contador</h1>
     <p>0</p>
     <button onClick={() => dispatch(actionCreator())}>Incrementar</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
   countState: state.count,
})

export default connect(mapStateToProps)(App);
