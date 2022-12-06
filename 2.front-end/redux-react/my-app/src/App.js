import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';
class App extends React.Component {
  render() {
    const { countState, dispatch } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={ () =>  dispatch(actionCreator(1)) }>Incrementa 1</button>
        <button onClick={ () =>  dispatch(actionCreator(5)) }>Incrementa 5</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);