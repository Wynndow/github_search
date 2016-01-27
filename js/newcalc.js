function perform_calculation(x, y, callback) {

  console.log('Your number is... ' + callback(x, y));

}

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// perform_calculation(3, 4, add);
// perform_calculation(3, 4, subtract);
// perform_calculation(3, 4, multiply);
// perform_calculation(3, 4, divide);
