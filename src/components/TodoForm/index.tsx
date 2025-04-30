import { addTodo } from "@/actions";
import styles from "./style.module.css";
import { Button } from "../Button";
import { Plus } from "lucide-react";
import { Input } from "../Input";

export const ToDoForm = async () => {
  const onSubmit = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    if (!title) return;

    await addTodo({
      title,
    });
  };

  return (
    <form action={onSubmit} className={styles.form}>
      <Input type="text" name="title" placeholder="Add a new todo" />
      <Button type="submit">
        <Plus />
      </Button>
    </form>
  );
};
