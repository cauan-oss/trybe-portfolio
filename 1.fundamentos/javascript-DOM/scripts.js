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
 
  let seleciona3 = document.getElementsByClassName("buttons-container")
  
  let diasFeriado
  let diasSexta
  
 function diasDezembro() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
   
   for(let i = 0; i < decemberDaysList.length; i += 1) {
    diasFeriado = decemberDaysList[i];
    diasSexta = decemberDaysList[i];
    let  seleciona = document.createElement("li");
    seleciona.innerText = decemberDaysList[i];
    seleciona.className = "day";
    seleciona2.appendChild(seleciona);
   
    if(diasFeriado === decemberDaysList[32] || diasFeriado === decemberDaysList[25] || diasFeriado === decemberDaysList[26]) {
      seleciona = seleciona.className = "day holiday"
    }

    if(diasSexta === decemberDaysList[5] || diasSexta === decemberDaysList[12] || diasSexta === decemberDaysList[19] || diasSexta === decemberDaysList) {
      seleciona = seleciona.className = "day friday"
    }
  }
  
  
}

function button() {
  var button = document.createElement("button");
  button.id = "btn-holiday"
 seleciona3.appendChild(button)
}

diasDezembro();
button();

   
     
     
  



