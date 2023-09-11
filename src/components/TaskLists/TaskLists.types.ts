import { ITask } from "$/types/global";
import { Dispatch, SetStateAction } from "react";

export interface ITaskListsProps {
  onClickTask: () => void;
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  setTask: Dispatch<SetStateAction<ITask | null>>;
  loading: boolean;
}
