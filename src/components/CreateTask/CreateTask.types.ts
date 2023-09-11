import { ITask } from "$/types/global";

export interface ICreateTaskProps {
  refetchTasks: (todo: ITask) => void;
}
