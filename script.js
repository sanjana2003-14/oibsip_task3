function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    var fromUnitSelector = document.getElementById("fromUnitSelector");
    var toUnitSelector = document.getElementById("toUnitSelector");
    var fromUnit = fromUnitSelector.options[fromUnitSelector.selectedIndex].value;
    var toUnit = toUnitSelector.options[toUnitSelector.selectedIndex].value;

    if (!isNaN(temperatureInput)) {
      var result;

      switch (fromUnit) {
        case "celsius":
          result = convertFromCelsius(temperatureInput, toUnit);
          break;
        case "fahrenheit":
          result = convertFromFahrenheit(temperatureInput, toUnit);
          break;
        case "kelvin":
          result = convertFromKelvin(temperatureInput, toUnit);
          break;
        default:
          result = "Invalid unit";
      }

      document.getElementById("result").innerHTML = result.toFixed(2) + " " + toUnit.toUpperCase();
    } else {
      document.getElementById("result").innerHTML = "Please enter a valid temperature.";
    }
  }

  function convertFromCelsius(temperature, toUnit) {
    switch (toUnit) {
      case "celsius":
        return temperature;
      case "fahrenheit":
        return (temperature * 9/5) + 32;
      case "kelvin":
        return temperature + 273.15;
      default:
        return "Invalid unit";
    }
  }

  function convertFromFahrenheit(temperature, toUnit) {
    switch (toUnit) {
      case "celsius":
        return (temperature - 32) * 5/9;
      case "fahrenheit":
        return temperature;
      case "kelvin":
        return (temperature - 32) * 5/9 + 273.15;
      default:
        return "Invalid unit";
    }
  }

  function convertFromKelvin(temperature, toUnit) {
    switch (toUnit) {
      case "celsius":
        return temperature - 273.15;
      case "fahrenheit":
        return (temperature - 273.15) * 9/5 + 32;
      case "kelvin":
        return temperature;
      default:
        return "Invalid unit";
    }
  }