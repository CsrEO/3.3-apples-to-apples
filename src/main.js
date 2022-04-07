import input from "input";

const haveDog = true;
const haveCat = false;
const havePet = true;

const correct = "I have a dog";
const answer = await input.text("do you have a dog?")

if(correct == answer){
     console.log("you have a dog");
 } else{
     console.log("you dont have a dog");

 }




