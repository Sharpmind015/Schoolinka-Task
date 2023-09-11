import { ReactNode } from "react";

export interface ITaskFormProps {
  heading: string;
  task: string;
  time: string;
  handleSubmit: (task: string) => void;
  buttonEls: ReactNode;
}
