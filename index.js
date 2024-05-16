import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    { message: "select operator", type: "list", name: "operator",
        choices: ["addition", "subtract", "multiply", "divide"] },
]);
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "divide") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "subtract") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    "please selecr correct operator";
}
