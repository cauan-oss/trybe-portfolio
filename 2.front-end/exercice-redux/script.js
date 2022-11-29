const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");
const idSpan = document.getElementById("value")
const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };
  
const reduce = (state, action) => {
   switch (state) {
    case value:
        
        break;
   
    default:
        state;
   }
}
const store = Redux.createStore(reduce)

buttonPrevious.addEventListener("click", () => {
    const guarda = []
    for(let i = 0; i < INITIAL_STATE.lenght; i + 1) {
       guarda = INITIAL_STATE[i]
       idSpan.innerHTML = guarda
    }
})


buttonNext.addEventListener("click", () => {
    console.log("testando")
})