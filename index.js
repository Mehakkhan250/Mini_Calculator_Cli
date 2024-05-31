import inquirer from "inquirer";
console.log(`Welcome to Mini Calculaor cli`);
let myLoop = true;
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            type: `number`,
            name: `num1`,
            message: `Enter your first number!`,
        },
        {
            type: `number`,
            name: `num2`,
            message: `Enter your second number!`,
        },
        {
            type: `list`,
            name: `operator`,
            message: `Select the operator `,
            choices: [`Addistion`, `Substraction`, `Multiplication`, `Division`]
        }
    ]);
    let { num1, num2, operator } = userInput;
    if (operator === "Addition")
        add();
    if (operator === "Substraction")
        sub();
    if (operator === "Multiplication")
        multiply();
    if (operator === "Division")
        divide();
    function add() {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
    function sub() {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }
    function multiply() {
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
    }
    function divide() {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    let calculateAgain = await inquirer.prompt([
        {
            type: `confirm`,
            name: `more`,
            message: `Do you want to more calculation`,
            default: false,
        }
    ]);
    if (!calculateAgain.more) {
        myLoop = false,
            console.log(`\nThank you for using mini calculator`);
    }
}
