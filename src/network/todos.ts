import { ITask } from "$/types/global";
import { AxiosResponse } from "axios";
import instance from "./api";

export const getTodos = async () => await instance.get<ITask[]>("/todos");

export const updateTodo = async ({
  id,
  ...body
}: Pick<ITask, "completed" | "title" | "id" | "userId">) =>
  await instance.put<Pick<ITask, "completed" | "title">, AxiosResponse<ITask>>(
    `/todos/${id}`,
    body
  );

export const createTodo = async (body: Pick<ITask, "completed" | "title">) =>
  await instance.post<Pick<ITask, "completed" | "title">, AxiosResponse<ITask>>(
    `/todos`,
    body
  );

export const deleteTodo = async ({ id }: Pick<ITask, "id">) =>
  await instance.delete<AxiosResponse<ITask>>(`/todos/${id}`);
