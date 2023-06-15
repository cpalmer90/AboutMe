"use strict";

let user;
let myFavAnimal;
let animal;
let answer;
let myJoke;
let who;
let answer0;
let answer1;
let answer2;
let answer3;
let answer4;

function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

alert(
  "Hello, Welcome to my site, so i can get to know you abit better please press the about you button below!"
);

function abtu() {
  function userName() {
    user = prompt(
      "Lets get to know each other better; lets start with telling me your name"
    );
    // console.log(user);
    alert(" Great i can already tell we are going to be best friends " + user);
  }

  userName();

  function favAnimal() {
    animal = prompt(" what is your favourite Animal?");
    console.log(animal);

    if (animal == "dog") {
      myFavAnimal = "cat";
      console.log(myFavAnimal);
    } else if (animal == "cat") {
      myFavAnimal = "pangolin";
      console.log(myFavAnimal);
    } else {
      myFavAnimal = "Liger";
      console.log(myFavAnimal);
    }
    alert(
      "Cool " +
        animal +
        " is an amzing animal. My favourite animal is pretty much a " +
        myFavAnimal
    );
  }

  favAnimal();

  function joke() {
    answer = prompt(user + ", would you like to hear a joke?");
    console.log(answer);

    if (answer === "yes") {
      myJoke = prompt("knock, knock");

      if (myJoke === "whos there") {
        who = prompt("disk");
      }
      if (who === "disk who") {
        alert("Disk is a recording, please leave your message after the beep!");
      }
    }
  }

  joke();
  alert(
    " it feels like ive know you a lifetime already " +
      " your name is " +
      user +
      ", your favourite animal is a " +
      animal +
      ", and you love my jokes"
  );

  alert(
    "now i know about you " +
      user +
      ", its time for you to learn about me; please read my site to learn more,"
  );
}

function quiz() {
  alert(
    "So; you think you know me now do you well,  i hope you do as your life depends on it"
  );
  alert("Mwhahahaha!");
  alert("please answer all questions yes/y or no/n");
  function q0() {
    answer0 = prompt("Question 1: Am i 33 years old?");
    console.log(answer0);
    if (answer0 === "yes" || answer0 === "y") {
      alert("Did you even read the Bio, im 33 years young!");
      console.log(answer0);
    } else if (answer0 === "no" || answer0 === "n") {
      alert(
        "Correct, i am a very youthful 33 years young (with back pain and dodgey knees"
      );
      console.log(answer0);
    } else {
      alert("Thats not an answer");
    }
  }
  q0();
  function q1() {
    answer1 = prompt(
      "Question 2: is one of my interests Landscape Photography?"
    );
    console.log(answer1);
    if (answer1 === "yes" || answer1 === "y") {
      alert("incorrect, im into wildlife photography");
      console.log(answer1);
    } else if (answer1 === "no" || answer1 === "n") {
      alert("Correct! great memory " + user);
      console.log(answer1);
    } else {
      alert("Thats not an answer");
    }
  }
  q1();
  function q2() {
    answer2 = prompt("Question 3: Do i support Norwich city Fc?");
    console.log(answer2);
    if (answer2 === "yes" || answer2 === "y") {
      alert("Come on You Yellows!");
      console.log(answer2);
    } else if (answer2 === "no" || answer2 === "n") {
      alert("Booo");
      console.log(answer2);
    } else {
      alert("Thats not an answer");
    }
  }
  q2();
  function q3() {
    answer3 = prompt("Am i a great guy?");
    console.log(answer3);
    if (answer3 === "yes" || answer3 === "y") {
      alert("Ding Ding we have a winner, great job " + user);
      console.log(answer3);
    } else if (answer3 === "no" || answer3 === "n") {
      alert(user + " Im sorry we are no longer friends");
      console.log(answer3);
    } else {
      alert("Thats not an answer");
    }
  }
  q3();
  function q4() {
    answer4 = prompt("Do i want to be a coder?");
    console.log(answer4);
    if (answer4 === "yes" || answer4 === "y") {
      alert("Sleep, Eat, Code, Repeat");
      console.log(answer4);
    } else if (answer4 === "no" || answer4 === "n") {
      alert("Error 404");
      console.log(answer4);
    } else {
      alert("Thats not an answer");
    }
  }
  q4();
  function q5() {
    const number = Math.floor(Math.random() * 10 + 1);
    for (let i = 4; i > 0; i--) {
      let guesses = i;
      const remaining = 4 - guesses;
      console.log(remaining);
      let guess = prompt(
        "guess a number betrween 1 and 10 you have " +
          guesses +
          " attempts left"
      );
      const guessNum = parseInt(guess);
      if (guessNum === number) {
        alert("Winner Winner, Chicken Dinner");
        break;
      }
      if (i === 1) {
        alert(" The correct number " + number);
        console.log(number);
        break;
      }
      if (guessNum < number) {
        alert("Too Low");
      } else if (guessNum > number) {
        alert("Too High");
      }
    }
  }
  q5();

  function q6() {
    // make an array of four places that i would like to visit.
    // user has to guess any one of the places stated in the array.
    // initiate the global variable for the user guess
    // set for loop with 6 iterations
    // inside the for loop prompt the user for a guess and assign it to a let variable.
    // if user guess is contained in the array then display weldone alert and break out of the loop.
    // if user has had 6 guesses then display alert to say they havent got the answer and list the correct answers.

    const placesToVisit = ["thailand", "the moon", "kenya", "the amazon"];
    let userGuess;
    for (let i = 0; i < 6; i++) {
      userGuess = prompt(
        "Guess one of four countries i would like to visit?"
      ).toLowerCase();

      if (placesToVisit.includes(userGuess)) {
        alert("Weldone thats correct");
        break;
      }
      if (i === 5) {
        alert("Incorrect");
        break;
      }
    }
  }
  q6();
}
