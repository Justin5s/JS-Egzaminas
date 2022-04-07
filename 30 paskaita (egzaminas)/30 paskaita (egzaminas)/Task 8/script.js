/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = function (number1, number2) {
    return number1 + number2;
  };
  this.subtraction = function (number1, number2) {
    return number1 - number2;
  };
  this.multiplication = function (number1, number2) {
    return number1 * number2;
  };
  this.division = function (number1, number2) {
    return number1 / number2;
  };
}

const testingObject = new Calculator();

const suma = testingObject.sum(6, 3);
console.log("sum ===", suma);

const atimtis = testingObject.subtraction(6, 3);
console.log("atimtis ===", atimtis);

const daugyba = testingObject.multiplication(6, 3);
console.log("daugyba ===", daugyba);

const dalyba = testingObject.division(6, 3);
console.log("dalyba ===", dalyba);
