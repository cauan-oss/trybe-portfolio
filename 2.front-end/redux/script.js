import { legacy_createStore as createStore } from "redux"; 
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
//criando o action 
const stateInitial = {count: 0};

const reducer = (state = stateInitial, action) => {
  return state; 
}
const store = createStore(reducer)

const incrementButton = document.querySelector('button'); 
incrementButton.addEventListener('click', () => {
   console.log("click");
});