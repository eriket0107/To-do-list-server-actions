import fs from "fs";

const db = JSON.parse(fs.readFileSync("db.json", "utf8"));


export const toDoFake = () => {
  const todos = Array.from({ length: 10_000 }).map((_, index) => ({
    id: index,
    title: `To Do ${index}`,
    completed: index % 3 === 0,
  }));
  db.todos.push(...todos as unknown as never[]);
  console.log(todos)
  fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
};

toDoFake();