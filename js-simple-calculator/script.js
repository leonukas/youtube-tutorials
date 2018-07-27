
// 1. grab the value from the form.

function calc() {
   var a = parseInt(document.querySelector("#value1").value);
   var b = parseInt(document.querySelector("#value2").value);
   var operator = document.querySelector("#operator").value;
   var calculate;

// 2. calculate result

   if(operator == "add") {
      calculate = a + b;
   } else if(operator == "min") {
      calculate = a - b;
   } else if(operator == "div") {
      calculate = a / b;
   } else if(operator == "mul") {
      calculate = a * b;
   }

// 3. output result to website

   document.querySelector("#result").innerHTML = calculate;
}












   {}
