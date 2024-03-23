#! /usr/bin/env node


import inquirer from "inquirer";

const Cal = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumber"},
    {message: "Enter second number", type: "number", name: "secondNumber"},
    {
        message:"select your operator which you want to use in your calculator ",
        type:"list",
        name:"Operator",
        choices:["Addition","Subtraction","Multiplication","Division","Exponent","Percentage","Modulus"],
    },
])

console.log(Cal);

if (Cal.Operator === "Addition"){
    console.log(Cal.firstNumber + Cal.secondNumber)
}else if (Cal.Operator === "Subtraction"){
    console.log(Cal.firstNumber - Cal.secondNumber)
}else if(Cal.Operator === "Multiplication"){
    console.log(Cal.firstNumber * Cal.secondNumber)
}else if(Cal.Operator === "Division"){
    console.log(Cal.firstNumber / Cal.secondNumber)
}else if(Cal.Operator === "Exponent"){
    console.log(Cal.firstNumber ** Cal.secondNumber)
}else if(Cal.Operator === "Percentage"){
    console.log((Cal.secondNumber / Cal.firstNumber)*100 + "%")
}else if(Cal.Operator === "Modulus"){
    console.log("Reminder: "+Cal.firstNumber % Cal.secondNumber)
}else {
    console.log("you should select valid operator")
}


