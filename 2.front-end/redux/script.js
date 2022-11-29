import { legacy_createStore as createStore } from "redux"; 
import { composeWithDevTools } from "@redux-devtools/extension";
//criando o action 
const stateInitial = {count: 0};

const reducer = (state = stateInitial, action) => {
   if(action.type === 'INCREMENT_COUNTER') {
    return {count: state.count + 1}
   }
  return state; 
}
const store = createStore(reducer)

const action = {type: "INCREMENT_COUNTER"}

const incrementButton = document.querySelector('button'); 
incrementButton.addEventListener('click', () => {
   store.dispatch(action)
});

store.subscribe(() => {
    const globalState = store.getState();
    console.log(globalState);
    const counterElement = document.querySelector("h2");
    counterElement.innerHTML = globalState.count;
    
})