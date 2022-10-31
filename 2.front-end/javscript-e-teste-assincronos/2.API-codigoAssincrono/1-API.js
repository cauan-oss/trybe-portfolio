const meuUl = document.getElementById("coins-list");
const fetchCoins = async () => {
    try {
      const apI = await fetch('https:api.coincap.io/v2/assets');
      const myResponse = await apI.json();
      return myResponse.data;
    } catch (erro) {
        console.log('Error', erro);
  }
  };
   const myFunction = async () => {
    const data = await fetchCoins();
     data.forEach((element) => {
      const meuLi = document.createElement("li");
      meuLi.innerText = element.id;
      meuUl.appendChild(meuLi);
     });
     return data[10];
  }; 
window.onload = () => {
  myFunction();
};   