//Enter current temperature and calculate the conversion

function convertemp(){
    //1) get the first temp//
    var temperature= prompt("Enter Celcius");

    var Farenheit= (temperature * 9/5) + 32;


    var temperaturelist = document.getElementById("weather");

    temperaturelist.innerHTML+= `

    <p>Celcius has been converted from: ${temperature} To Farenheit: ${Farenheit}</p>
    `
//Farenheit = (Celsius * 9/5) + 32
}