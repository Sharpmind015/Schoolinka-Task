import { ITask } from "$/types/global";
import instance from "./api";

export const getTodos = async () => await instance.get<ITask[]>("/todos");

export const updateTodo = async ({
  id,
  ...body
}: Pick<ITask, "completed" | "title" | "id">) =>
  await instance.put<ITask, Pick<ITask, "completed" | "title">>(
    `/todos/${id}`,
    body
  );

export const createTodo = async (body: Pick<ITask, "completed" | "title">) =>
  await instance.post<ITask, Pick<ITask, "completed" | "title">>(
    `/todos`,
    body
  );
