import { ITask } from "$/types/global";
import { Dispatch, SetStateAction } from "react";

export interface ITaskViewProps {
  selectedTask: ITask | null;
  onEdit: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}
