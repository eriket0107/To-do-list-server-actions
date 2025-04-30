import { ToDoList } from "@/components/ToDoList";
import styles from "./page.module.css";
import { ToDoForm } from "@/components/TodoForm";
import { ThemeButton } from "@/components/ThemeButton";

export default async function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>To Do List</h1>
          <ThemeButton />
        </div>

        <div className={styles.container}>
          <ToDoList />
          <ToDoForm />
        </div>
      </div>
    </div>
  );
}
