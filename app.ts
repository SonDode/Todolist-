import inquirer from "inquirer";

const todos: string[] = [
  "Call your parents",
  "Shopping for groceries",
  "Going to the gym"
];

function showTasks() {
  if (todos.length === 0) {
    console.log("\nNu ai task-uri momentan.");
    return;
  }

  console.log("\nTask-urile tale:");
  for (const [index, todo] of todos.entries()) {
    console.log(`${index + 1}. ${todo}`);
  }
}

async function createTask() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: "Ce task vrei sa adaugi?",
      validate: (input: string) => {
        if (!input.trim()) {
          return "Task-ul nu poate fi gol.";
        }
        return true;
      },
    },
  ]);

  todos.push(answer.task.trim());
  console.log("Task adaugat cu succes.");
}

async function updateTask() {
  if (todos.length === 0) {
    console.log("\nNu exista task-uri de modificat.");
    return;
  }

  const { index } = await inquirer.prompt([
    {
      type: "list",
      name: "index",
      message: "Ce task vrei sa modifici?",
      choices: todos.map((todo, i) => ({
        name: `${i + 1}. ${todo}`,
        value: i,
      })),
    },
  ]);

  const { newTask } = await inquirer.prompt([
    {
      type: "input",
      name: "newTask",
      message: "Care este noul text pentru task?",
      default: todos[index],
      validate: (input: string) => {
        if (!input.trim()) {
          return "Task-ul nu poate fi gol.";
        }
        return true;
      },
    },
  ]);

  todos[index] = newTask.trim();
  console.log("Task actualizat cu succes.");
}

async function deleteTask() {
  if (todos.length === 0) {
    console.log("\nNu exista task-uri de sters.");
    return;
  }

  const { index } = await inquirer.prompt([
    {
      type: "list",
      name: "index",
      message: "Ce task vrei sa stergi?",
      choices: todos.map((todo, i) => ({
        name: `${i + 1}. ${todo}`,
        value: i,
      })),
    },
  ]);

  const [deletedTask] = todos.splice(index, 1);
  console.log(`Task sters: "${deletedTask}"`);
}

async function runMenu() {
  console.log("Hello, this is your to do list.");

  let shouldExit = false;

  while (!shouldExit) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "\nAlege o actiune:",
        choices: [
          { name: "Create - adauga task", value: "create" },
          { name: "Read - afiseaza task-urile", value: "read" },
          { name: "Update - modifica task", value: "update" },
          { name: "Delete - sterge task", value: "delete" },
          { name: "Exit", value: "exit" },
        ],
      },
    ]);

    switch (action) {
      case "create":
        await createTask();
        break;
      case "read":
        showTasks();
        break;
      case "update":
        await updateTask();
        break;
      case "delete":
        await deleteTask();
        break;
      case "exit":
        shouldExit = true;
        console.log("La revedere!");
        break;
    }
  }
}

await runMenu();