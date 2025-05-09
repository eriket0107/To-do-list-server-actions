"use client";

import { ITodo } from "@/interfaces";
import styles from "./styles.module.css";
import { toggleTodoCompleted, deleteTodo, updateTodo } from "@/actions";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { X } from "lucide-react";
import { Input } from "../Input";
import { cn } from "@/utils/classNames";

export const ToDoItem = ({ todo }: { todo: Partial<ITodo> }) => {
  const [title, setTitle] = useState(todo.title);
  const [visible, setVisible] = useState(false);
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChange = async (completed: boolean) => {
    await toggleTodoCompleted({ ...todo, completed });
  };

  const handleDelete = async (id: string) => {
    setVisible(false);
    setTimeout(async () => {
      await deleteTodo({ id });
    }, 100);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await updateTodo({ ...todo, title });
    }
  };
  const handleBlur = async (event?: React.FocusEvent<HTMLInputElement>) => {
    if (event) {
      await updateTodo({ ...todo, title });
    }
  };

  const liItem = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        } else {
          setVisible(false);
        }
      });
    });

    if (liItem.current) {
      observer.observe(liItem.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <li
      key={todo.id}
      className={cn(styles.li, {
        [styles.visible]: visible,
        [styles.hidden]: !visible,
      })}
      ref={liItem}
    >
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
          onBlur={handleBlur}
          hasBorder={false}
        />
        <Button
          onClick={() => handleDelete(todo.id as string)}
          className={styles.button}
        >
          <X />
        </Button>
      </label>
    </li>
  );
};
