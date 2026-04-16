import inquirer from "inquirer";

async function test() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: "Ce task vrei sa adaugi?",
    },
  ]);

  console.log(answers.task);
}

await test();