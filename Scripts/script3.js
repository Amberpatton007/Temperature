// Exercise: Guess the Number Game

// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print "Sorry, that's not correct. The number was [generated number]".

function guessNumber(){
    let randomNumber=Math.floor(Math.random()*10)+1;
    //get the number from the user
    let userGuess = prompt("Guess the number between one and ten");
    let results = document.getElementById("results");

    //check if the guess number is correct
    if(userGuess == randomNumber){
        results.innerHTML="Congratulations! You guess the Number";
    }else{
        results.innerHTML="Sorry, that is not correct. The number was " + randomNumber;
    }
}

// Challenge: Driving License

// 1. Prompt the user to enter their age.
// 2. Use an if-else statement to determine if the person can get a driving license.
// 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
// 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."

function getDriverLicense(){

    let age = prompt("Please enter your age");
    let answer = document.getElementById("answer");

    if(age>=18){
        answer.innerHTML="Congratulations! You can get your driving license"
    }else{
        answer.innerHTML="Sorry, you are too young to get a driving license"
    }

    
}

// challenge: login 
// 0. store in a variable the next username = "student@sdgku.edu" 
// 1. Prompt the user to enter username
// 3. if the username is correct, print "Welcome to the system!:"
// 4. If  the username is incorrect, print "Invalid credentials"

function Login(){
    let usernameDB= "student@sdgku.edu";
    let userPassDB= "Test1234";

    let userName = prompt("Enter your username");
    let userPass = prompt("Enter your password");

    if(userName==usernameDB && userPass==userPassDB){
        console.log("Welcome to the system")
    }else{
        console.log("Invalid credentials")
    }
    
}