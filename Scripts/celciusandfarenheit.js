function convertTemp (){
    let option = prompt("Enter the option Celcius,  or Farenheit");
    let Temperature = Number(prompt("please enter the temperature"));
    let result= document.getElementById("result")


    if(option = "Celcius"){
        let f=(Temperature * 9/5) + 32
        result.innerHTML = (f)
};

    if(option = "Farenheit"){
        let c=(Temperature - 32) * 5/9
        result.innerHTML = (c)
    }
}

