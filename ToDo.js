const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let todo = [];

function displayToDos() {
    console.log("\nYour TO-Do list:");
    if (todo.length === 0) {
        console.log("No tasks yet! Add a task.");
    } else {
        todo.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

function addTodo() {
    readline.question("Enter your task here: ", (task) => {
        todo.push(task);
        console.log("New task added!");
        displayToDos();
        askforfunction();
    });
}

function removetask() {
    displayToDos();
    readline.question("Enter the number of the task to be removed: ", (index) => {
        const taskIndex = parseInt(index) - 1;
        if (taskIndex >= 0 && taskIndex < todo.length) {
            todo.splice(taskIndex, 1);
            console.log("Task removed!");
        } else {
            console.log("Invalid task number!");
        }
        displayToDos();
        askforfunction();
    });
}

function askforfunction() {
    readline.question("\nWhat do you want to do? \n(add, remove, list, quit): ", (action) => {
        switch (action) {
            case "add":
                addTodo();
                break;
            case "remove":
                removetask();
                break;
            case "list":
                displayToDos();
                askforfunction();
                break;
            case "quit":
                console.log("Thank you!");
                readline.close();
                break;
            default:
                console.log("Invalid action! Please try again.");
                askforfunction();
                break;
        }
    });
}

console.log("Welcome to the To-Do Application!");
askforfunction();
