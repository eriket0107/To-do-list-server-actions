"use client";

import { ITodo } from "@/interfaces";
import styles from "./styles.module.css";
import { toggleTodoCompleted, deleteTodo, updateTodo } from "@/actions";
import { useState } from "react";
import { Button } from "../Button";
import { X } from "lucide-react";
import { Input } from "../Input";

export const ToDoItem = ({ todo }: { todo: Partial<ITodo> }) => {
  const [title, setTitle] = useState(todo.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChange = async (completed: boolean) => {
    await toggleTodoCompleted({ ...todo, completed });
  };

  const handleDelete = async (id: string) => {
    await deleteTodo({ id });
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await updateTodo({ ...todo, title });
    }
  };

  return (
    <li key={todo.id} className={styles.li}>
      <label htmlFor={todo.id} className={styles.item}>
        <Input
          className={styles.checkBox}
          id={todo.id}
          name="completed"
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={(event) => handleChange(event.target.checked)}
        />
        <Input
          type="text"
          value={title}
          className={styles.titleBox}
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown}
          hasBorder={false}
        />
        <Button onClick={() => handleDelete(todo.id as string)}>
          <X />
        </Button>
      </label>
    </li>
  );
};
