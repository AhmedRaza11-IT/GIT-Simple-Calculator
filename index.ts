#!  /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
  {
    type: "number",
    name: "First Number",
    message: "Enter First number?",
  },
  {
    type: "number",
    name: "Second Number",
    message: "Enter Second number?",
  },
  {
    message: "Select any of the four operation",
    type: "list",
    name: "operation",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
  },
]);
if (answers.operation === "Add") 
    {
        console.log(answers["First Number"] + answers["Second Number"]);
    } 
else if (answers.operation === "Subtract") 
    {
        console    .log(answers["First Number"] - answers["Second Number"]);
    } 
else if (answers.operation === "Multiply") 
    {
        console.log(answers["First Number"] * answers["Second Number"]);
    } 
else if (answers.operation === "Divide")
    {
        console.log(answers["First Number"] / answers["Second Number"]);
    }
else 
    {
        console.log("Invalid Operation");
    }

