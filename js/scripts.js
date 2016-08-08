// var add = function(number1, number2) {
//   return number1 + number2;
// };
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = divide(number1, number2);
// alert(result);
// var BMI = function(w,h){
//   var finWeight=w*.45;
//   var finHeight=h*.025
//   return finWeight/Math.pow(finHeight,2);
// }
// height=parseInt(prompt("Your height"));
// weight=parseInt(prompt("Your weight"));
//
// alert(BMI(weight,height));

var convert = function() {
  celcius =parseInt(prompt("Enter temp in Celcius"));
  var far = celcius * (9/5) + 32;
  return far;
}

//var cel = parseInt(prompt("Enter temp in Celcius"));

alert(convert());
