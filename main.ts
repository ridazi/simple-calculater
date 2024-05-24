import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  {message:"Enter second number",type:"number",name:"secondNumber"},
  
    {message:"select one of the operaters to perform operation",
   type:"list",
   name:"operator",
   choices: ["addition","subtraction","multiplication","division"]
}
]);
console.log(answer)
 //conditional statment
if(answer.operater === "addition"){
    console.log("your value is" + answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction"){
console.log(answer.firstNumber - answer.secondNumber)
}else if (answer.operator === "multiplication"){
  console.log(answer.firstNumber * answer.secondNumber)
}else if (answer.operator === "division"){
  console.log(answer.firstNumber / answer.secondNumber)
}else{
  console.log("please select valid operator")
}
