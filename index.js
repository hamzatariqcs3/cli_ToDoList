import inquirer from 'inquirer';
import chalk from "chalk";
let todoList = [];
async function startMenu() {
    let choice = await inquirer.prompt([
        {
            type: "rawlist",
            name: 'action',
            message: 'ToDo List Menu',
            choices: ['Add Task', 'Mark Task as Done', 'Show List', 'Exit'],
        },
    ]);
    switch (choice.action) {
        case 'Add Task':
            const task = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'action',
                    message: 'Enter task:',
                },
            ]);
            todoList.push({ text: task.action, done: false });
            break;
        case 'Mark Task as Done':
            const index = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'action',
                    message: 'Enter the task number to mark as done:',
                },
            ]);
            const taskIndex = parseInt(index.action) - 1;
            if (taskIndex >= 0 && taskIndex < todoList.length) {
                todoList[taskIndex].done = true;
            }
            else {
                console.log('Invalid task number.');
            }
            break;
        case 'Show List':
            if (todoList.length != 0) {
                todoList.forEach((item, index) => {
                    const status = item.done ? '[Done]' : '[Pending]';
                    console.log(`${index + 1}. ${status} ${item.text}`);
                });
            }
            else {
                console.log("No Record Found");
            }
            break;
        case 'Exit':
            console.log('Exiting the application.');
            return;
    }
    startMenu();
}
;
function main() {
    console.log(chalk.blue.bold(`Welcome to ${chalk.yellow.bold("To DO list")} Application`));
    setTimeout(async () => {
        startMenu();
    }, 3000);
}
main();
