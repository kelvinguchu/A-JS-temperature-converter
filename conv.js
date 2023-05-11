/*
* This function converts a temperature from degrees Celsius to degrees Fahrenheit.
*
* @param {number} input The temperature in degrees Celsius.
* @return {number} The temperature in degrees Fahrenheit.
*/
function convert(input) {
    // Get the value of the input element.
    const inputValue = document.getElementById("input").value;
  
    // Convert the input value to degrees Fahrenheit.
    const converted = (inputValue * 1.8) + 32;
  
    // Return the converted value.
    return converted;
  }
  
  /*
  * This function displays the converted temperature.
  *
  * @param {number} converted The temperature in degrees Fahrenheit.
  */
  function display(converted) {
    // Set the inner HTML of the demo element to the converted temperature.
    document.getElementById("demo").innerHTML = converted + " Fahrenheit";
  }
  