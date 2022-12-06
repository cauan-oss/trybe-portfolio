/* const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");
const idSpan = document.getElementById("value");
const INITIAL_STATE = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

const reducer = (state) => {
  switch (state.index) {
    case 0:
       console.log(INITIAL_STATE.colors[INITIAL_STATE.index])
        break;
  
    default:
        break;
  }
};

const store = Redux.createStore(reducer);

buttonPrevious.addEventListener("click", () => {
  INITIAL_STATE.index--;
  if (INITIAL_STATE.index < 0) {
    INITIAL_STATE.index = INITIAL_STATE.colors.length;
  }
  console.log(INITIAL_STATE.index);
  reducer(INITIAL_STATE)
});

buttonNext.addEventListener("click", () => {
  INITIAL_STATE.index++;

  if (INITIAL_STATE.index > INITIAL_STATE.colors.length) {
    INITIAL_STATE.index = 0;
  }
  console.log(INITIAL_STATE.index);
  reducer(INITIAL_STATE)
});
 */

const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");
const idSpan = document.getElementById("value");
const INITIAL_STATE = {
    colors: ["white", "black", "red", "green", "blue", "yellow"],
    index: 0,
  };

 

const reducer = (state = INITIAL_STATE, action) => {
   switch (action.type, action.payload) {
    case 'NEXT_COLOR':
        return {
            ...state, 
            index: state
        }
        
    case 'PREVIOUS_COLOR': 
     return {
        ...state, 
        index: state.index-1
     }
   
    default:
        return state;
   }
}
const store = Redux.createStore(reducer)
store.subscribe(() => {
   const cor = store.getState().index
    idSpan.innerHTML = cor
})
let zero = 0;
const dispara = {type: 'NEXT_COLOR',  payload: 'PREVIOUS_COLOR'}
buttonPrevious.addEventListener('click', () => {
    INITIAL_STATE.colors[zero]
    zero++
    console.log(INITIAL_STATE.colors)
})

buttonNext.addEventListener('click', () => {

})