 /* const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");
const idSpan = document.getElementById("value")
const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };
  
const reduce = (state = INITIAL_STATE, action) => {
   switch (state) {
    case value:
        
        break;
   
    default:
        state;
   }
}

const store = Redux.createStore(reduce)

buttonPrevious.addEventListener("click", () => {
    store.dispatch()
})

buttonNext.addEventListener("click", () => {
    console.log("testando")
})  */
const buttonPrevious = document.getElementById("previous")
const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  buttonPrevious.addEventListener("click", () => {
    store.dispatch()
})