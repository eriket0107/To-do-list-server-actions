import { getTodos } from "@/actions";
import { ToDoItem } from "../ToDoItem";
import styles from "./style.module.css";
export const ToDoList = async () => {
  const todos = await getTodos();

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
