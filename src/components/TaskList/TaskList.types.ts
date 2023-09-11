import { ITask } from "$/types/global";

export interface ITaskListProps
  extends Pick<ITask, "completed" | "title" | "id"> {
  onClick: (id: number) => void;
}
