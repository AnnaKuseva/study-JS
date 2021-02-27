let money =720;
let income = 'freelance';
let addExpenses = 'internet, taxi, travel';
let deposit = false;
let mission = 20000;
let period = 6;


console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен' + ' ' + period + ' ' + 'месяцев');
console.log('Цель заработать' + ' ' +  mission + ' ' + '$');



console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));


let budgetDay = money;
budgetDay /= 30;
console.log(budgetDay);
