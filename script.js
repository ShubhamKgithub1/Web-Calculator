function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteFromDisplay() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function addToDisplay(value) {
  document.getElementById('display').value += value;
}


function calculateResult() {
  let display = document.getElementById('display');
  let expression = display.value;

  // Replace '%' with '/100*' in the expression to handle percentage calculation
  expression = expression.replace(/%/g, '/100*');

  try {
    let result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
