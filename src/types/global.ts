export type Status = "add" | "init" | "view";

export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
