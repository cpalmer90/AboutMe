"use strict";

let user;
let myFavAnimal;
let animal;
let answer;
let myJoke;
let who;


function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

alert("Hello, Welcome to my site");

function userName(){

    user = prompt("Lets get to know each other better; lets start with telling me your name");
    // console.log(user);
    alert(" Great i can already tell we are going to be best friends " + user);
}

userName();

function favAnimal(){

    animal = prompt(user + " what is your favourite Animal?").toLowerCase()
    console.log(animal);

if(animal === " dog"){
myFavAnimal = " Cat"
} else if (animal === " Cat"){
    myFavAnimal = " pangolin"
} else {
    myFavAnimal = " Liger"
}
alert("Cool " + animal + " is an anamzing animal. My favourite animal is pretty much a" + myFavAnimal);
    
}

favAnimal();

function joke(){

    answer = prompt(user + ", would you like to hear a joke?").toLowerCase()
    console.log(answer);

    if (answer === "yes"){
        myJoke = prompt("knock, knock")

if (myJoke === "whos there"){
    who = prompt("disk")
    }
    if (who === "disk who"){
                alert("Disk is a recording, please leave your message after the beep!");
    }
    } 
}

joke();

alert(" it feels like ive know you a lifetime already " + " your name is " +  user + ", your favourite animal is a " +  animal + ", and you love my jokes");

alert("now i know about you " + user + ", its time for you to learn about me; please read my site to learn more,when you think you know me better have a go at the quiz, thank you =]");



