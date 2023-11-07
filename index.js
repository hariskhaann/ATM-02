import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly enter your ID: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your Pin: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Transaction: ",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 5000, 10000, 20000],
        message: "Select Your Amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter you amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    },
]);
if (answers.userID && answers.userPin) {
    const balance = 500000;
    console.log("Previous Balance", balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("Your remaining balance is: ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
