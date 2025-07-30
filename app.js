// 🔹 Task 1: Show Current Date
// Ek function banao jo alert me aaj ki date dikhaye.

// let userDate = prompt(`Do you want to know what is date today?`);
function currentDate() {
let userDate = confirm(`AJ KI TAREEQH DEKHNI HA?`)
if (userDate){
let dateToday = new Date();
let updated = dateToday.getDate();
alert(updated);
}
}

// 🔹 Task 2: Show Current Time
// Ek function likho jo alert me sirf current time dikhaye in HH:MM:SS format.

function showTime() {
   let now = new Date();
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();

   if(hours < 10) hours = "0" + hours;
   if(minutes < 10) minutes = "0" + minutes;
   if(seconds < 10) seconds = "0" + seconds;    

   alert( `${hours}:${minutes}:${seconds}`);
}

// 🔹 Task 3: Show Milliseconds Since 1970
// Ek function banao jo milliseconds dikhaye jo Jan 1, 1970 se ab tak guzray hain.

function oldDate() {
   let now = new Date();
   let millisecondsSince1970 = now.getTime();
   alert(`milliseconds since jan 1, 1970: ${millisecondsSince1970}`);
}

// 🔹 Task 4: Greet User Based on Time
// Ek function greetUser() banao jo time ke hisaab se greeting de:

// 5am–12pm: Good Morning

// 12pm–5pm: Good Afternoon

// 5pm–9pm: Good Evening

// Baqi sab: Good Night


function greetUser(){
let now = new Date();
let hour = now.getHours();

   if(hour >= 5 && hour < 12){
      alert("Good Morning ");
   } else if (hour >= 12 &&  hour > 17){
      alert("Good Afternoon");
   } else if(hour >= 17 &&  hour > 21) {
      alert("Good Evening");
   } else {
      alert("Good Night");
   }
   // alert(greetUser()); 
   
}

// // 🔹 Task 5: Calculate Age
// // Prompt se user ka birth year lo, aur uska age calculate kar ke alert karo.


function calcAge() {
   let birthYear = +prompt("Birth year dalein:");
   let currentYear = +prompt("Current year dalein:");

   let age = currentYear - birthYear;

   alert("Aap ki age hai: " + age + " saal");
}



// 🔹 Task 6: Show Current Day
// Aaj ka din (Monday, Tuesday, etc.) alert me show karo using JS.

function dayToday() {
   let days = ["sun", "mon", "tue", "wed", "thu", "fir", "sat"]
      let today  = new Date().getDay();
      alert(`aj ka din ye ha: ${days[today]}`);
}

// 🔹 Task 7: Create Simple Timer
// Ek function banao jo console me seconds count kare (1, 2, 3...) har second ke baad.

function secondscounter() {
   let counter = 1; 

   setInterval(function () {
      console.log(counter++);
   }, 1000);
}


// 🔹 Task 8: Real-Time Clock (Console)
// Ek clock banao jo har second console me current time print kare.

function liveClock() {
  setInterval(() => {
    let now = new Date();
    document.getElementById("liveClock").innerText = now.toLocaleTimeString();
  }, 1000);
}
liveClock();



// 🔹 Task 9: Multiply Two Numbers
// Ek function banao multiply(a, b) jo do numbers ka product alert me dikhaye.

 function multiply(a, b) {
      alert("Multiply karne ke baad: " + (a * b));
    }

    function getAndMultiply() {
      let num1 = prompt("Pehla number daalein:");
      let num2 = prompt("Dusra number daalein:");

      multiply(Number(num1), Number(num2));
    }

//     🔹 Task 10: Even/Odd Checker
// Prompt se number lo, check karo wo even hai ya odd, aur result alert karo

function checkEvenOdd() {
      let input = prompt("Koi number daalein:");

      let number = Number(input);

      if (isNaN(number)) {
        alert("Please sirf number hi daalein!");
      } else if (number % 2 === 0) {
        alert(number + " ek EVEN number hai.");
      } else {
        alert(number + " ek ODD number hai.");
      }
    }