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
      alert("Correct, i am very youthful");
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
      alert("Come on You Yellow!");
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
}
