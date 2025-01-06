"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export async function createTodos(FormData: FormData) {
  const title = FormData.get("title") as string;
  if (!title.trim()) {
    throw new Error("Title is required");
  }

  await prisma.todo.create({
    data: {
      title,
    },
  });
  revalidatePath("/");
}

export async function changeStatus(FormData: FormData) {
  const id = FormData.get("id") as string;
  const todo = await prisma.todo.findUnique({ where: { id } });

  const updateStatus = !todo?.isCompleted;
  await prisma.todo.update({
    where: { id },
    data: { isCompleted: updateStatus },
  });

  revalidatePath("/");
}

export async function deleteTodo(FormData: FormData) {
  const id = FormData.get("id") as string;
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}

export async function editTodo(FormData: FormData) {
  const id = FormData.get("id") as string;
  const title = FormData.get("title") as string;
  await prisma.todo.update({
    where: { id },
    data: { title },
  });
  revalidatePath("/");
}
