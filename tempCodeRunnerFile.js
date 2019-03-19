let money , time;
nomey = promt ("Ваш бюджет на месяц?", '');
time = promt ("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

//содержит типы данных 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false
  };

 let exps1, exps2;
exps1 = prompt ("Введите обязательную статью расходов в этом месяце", '');
appData.expenses[exps1] = prompt('Во сколько обойдется?', '');

exps2 = promt("Введите вторую обязательную статью расходов в этом месяце ", '');
appData.expenses[exps2] = prompt('Во сколько обойдется?', '');

alert(`Вам понадобится ${appData.expenses[exps1]/30} рублей в день для ${exps1}\n
 и ${appData.expenses[exps2]/30} рублей в день для ${exps2}` );
