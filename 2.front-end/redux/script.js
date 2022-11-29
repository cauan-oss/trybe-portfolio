import { legacy_createStore as createStore } from "redux"; 

const incrementButton = document.querySelector('button'); 
incrementButton.addEventListener('click', () => {
   console.log("click");
});