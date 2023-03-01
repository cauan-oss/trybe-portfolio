-- o comando datediff serve para contar a diferenca de dias entre uma data e outra;
SELECT datediff('2030-01-20', '2023-03-01');

-- o comando timediff serve para contar a diferenca entre uma hora e outra 
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- diferenca entre horas das datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');