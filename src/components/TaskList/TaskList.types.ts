import { ITask } from "$/types/global";
import { Dispatch, SetStateAction } from "react";

export interface ITaskListProps
  extends Pick<ITask, "completed" | "title" | "id"> {
  onClick: (id: number) => void;
  updateLocalTodos: (id: number) => void;
  setTask: Dispatch<SetStateAction<ITask | null>>;
}
