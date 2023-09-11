import { createTodo } from "$/network/todos";
import { FC } from "react";
import Button from "../Button/Button";
import TaskForm from "../TaskForm/TaskForm";
import { ICreateTaskProps } from "./CreateTask.types";

const CreateTask: FC<ICreateTaskProps> = ({ refetchTasks }) => {
  return (
    <div>
      <TaskForm
        handleSubmit={async (task) => {
          const res = await createTodo({
            completed: false,
            title: task,
          });
          refetchTasks(res.data);
        }}
        heading="Add Task"
        task=""
        time=""
        buttonEls={
          <div className="flex gap-3">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default CreateTask;
