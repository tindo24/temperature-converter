function convertToCelcius(tempF) {
  celsius = ((tempF - 32) * 5) / 9;
  return celsius;
}

function describeTemperature(tempF) {
  if (tempF < 0) {
    return "very cold";
  } else if (tempF < 20) {
    return "cold";
  } else if (tempF < 30) {
    return "warm";
  } else if (tempF < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

// Create a prompt
let input = prompt(" Enter temp in Fahreinheiht: ");
let tempF = parseFloat(input); // covert the result into  a float

/*
 * Create an if statetment of validate the temp
 * assign tempF to celcius conversion
 * the check to see if the temp is either hot or cold
 */

if (!isNaN(tempF)) {
  let celcTemp = convertToCelcius(tempF);
  let descTemp = describeTemperature(tempF);
  alert(`${tempF} is ${celcTemp.toFixed(1)} Celcius which feels ${descTemp}.`);
} else {
  alert("Please enter a valid number ");
}
