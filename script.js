'use strict';

let money, time;

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10) );

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false
};



  for (let i = 0;i< 2; i++){
let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется");
    

    if ((typeof(a))==="string" && (typeof(a)) !=null && (typeof(b)) !=null
    && a !='' && b !=='' && a.length < 50 )  {   // колличество символов в строке ,a !='' && b !=='' чтобы не было пустых полей 
    console.log("done");
    appData.expenses[a] = b
    }else{ ((a && b) > 50 ) // При не выполниние ни одного из условий
      console.log(a,"Пидр ");
    }
  }  ;
 appData.moneyPerDay = appData.budget/30;

 
 alter ("Ежедневный бюджет " + appData.moneyPerDay);

 if (appData.moneyPerDay < 500){
   console.log("Минимальный уровень достатка" )
 }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
   console.log("Средний уровень достатка ");
 } else if (appData.moneyPerDay > 2000) {
   console.log("Высокий уровень достатка ")
 }else {
   console.log("Произошла ошибка ")
 }

