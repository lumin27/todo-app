"use server";

import { prisma } from "./prisma";
import { redirect } from "next/navigation";
export async function createTodos(FormData: FormData) {
  const title = FormData.get("title") as string;

  if (!title) return;

  await prisma.todo.create({
    data: {
      title,
    },
  });
  redirect("/");
}

export async function changeStatus(FormData: FormData) {
  const id = FormData.get("id") as string;
  const todo = await prisma.todo.findUnique({ where: { id } });

  const updateStatus = !todo?.isCompleted;
  await prisma.todo.update({
    where: { id },
    data: { isCompleted: updateStatus },
  });

  redirect("/");
}

export async function getTodos() {
  const todos = await prisma.todo.findMany({
    select: { title: true, id: true, isCompleted: true },
    orderBy: { createdAt: "desc" },
  });
  return todos;
}

export async function deleteTodo(FormData: FormData) {
  const id = FormData.get("id") as string;
  await prisma.todo.delete({ where: { id } });
  redirect("/");
}

export async function editTodo(FormData: FormData) {
  const id = FormData.get("id") as string;
  const title = FormData.get("title") as string;
  await prisma.todo.update({
    where: { id },
    data: { title },
  });
  redirect("/");
}
