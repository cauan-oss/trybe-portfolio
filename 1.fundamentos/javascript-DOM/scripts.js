function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  let seleciona2 = document.getElementById("days");
  let seleciona3 = document.querySelector("div")
  let diasFeriado
  let diasSexta
  let btn = document.createElement("button");
  function diasDezembro() {
    let  decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for(let i = 0; i < decemberDaysList.length; i += 1) {
     diasFeriado = decemberDaysList[i];
     diasSexta = decemberDaysList[i];
     let seleciona = document.createElement("li");
     seleciona.innerText = decemberDaysList[i];
     seleciona.className = "day";
     seleciona2.appendChild(seleciona);
     if(diasFeriado === decemberDaysList[32] || diasFeriado === decemberDaysList[25] || diasFeriado === decemberDaysList[26]) {
       seleciona = seleciona.className = "day holiday";
     }
 
     if(diasSexta === decemberDaysList[5] || diasSexta === decemberDaysList[12] || diasSexta === decemberDaysList[19] || diasSexta === decemberDaysList) {
       seleciona = seleciona.className = "day friday";
     }
   }
  }
  function button(feriados) {
   // let btn = document.createElement("button");
    let nomeBtn = document.createTextNode("feriados");
    btn.appendChild(nomeBtn);
    seleciona3.className = "buttons-container";
    //btn.style.backgroundColor = "red"
    seleciona3.appendChild(btn);
    btn.addEventListener("click", function() {
      var cor = document.getElementsByClassName("holiday")
      for(i = 0; i < cor.length; i += 1) {
        let compara = cor[i];
        if(compara.style.backgroundColor === "red") {
          compara = compara.style.backgroundColor = "rgb(238,238,238)"
        }
        else {
          compara.style.backgroundColor = "red";
        }
      }
    } )  
  }
  
       
  function buttonFriday(sextaFeira) {
      
    let novoBotao = document.createElement("button");
    let nomeBotao = document.createTextNode("sexta-feira");
    novoBotao.appendChild(nomeBotao);
    seleciona3.className = "buttons-container";
    seleciona3.appendChild(novoBotao);
    novoBotao.addEventListener("click", function() {
    let sextou = document.getElementsByClassName("friday")
    for(i = 0; i < sextou.length; i += 1) {
    let recebe = sextou[i];
    recebe = recebe.innerText = "sextou";
  }
  })
 
  

  
   
   
  
 
  

   


 









     

    
       


    


}








diasDezembro();
button();
buttonFriday();




   
     
     
  



