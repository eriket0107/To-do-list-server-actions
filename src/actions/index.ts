"use server";

import { api } from "@/api";
import { ITodo } from "@/interfaces";
import { revalidatePath } from "next/cache";

const getTodos = async (): Promise<ITodo[]> => {
  try {
    const toDos = await api("todos");
    return toDos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addTodo = async ({ title }: { title: string }) => {
  try {
    const toDos = await api("todos", {
      method: "POST",
      body: JSON.stringify({ title, completed: false }),
    });

    return toDos;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    revalidatePath("/addTodo");
  }
};

const toggleTodoCompleted = async ({ id, ...rest }: Partial<ITodo>) => {
  try {
    const toDos = await api(`todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...rest }),
    });
    return toDos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateTodo = async ({ id, ...rest }: Partial<ITodo>) => {
  try {
    const toDos = await api(`todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...rest }),
    });
    return toDos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteTodo = async ({ id }: { id: string }) => {
  try {
    const toDos = await api(`todos/${id}`, {
      method: "DELETE",
    });
    return toDos;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    revalidatePath(`/todos/${id}`);
  }
};

export { getTodos, addTodo, toggleTodoCompleted, deleteTodo, updateTodo };