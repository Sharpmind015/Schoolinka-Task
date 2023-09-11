import { Calendar } from "$/assets/svg/calendar";
import { Clock } from "$/assets/svg/clock";
import { FC } from "react";
import Button from "../Button/Button";
import TaskForm from "../TaskForm/TaskForm";
import { ITaskViewProps } from "./TaskView.types";
import { deleteTodo, updateTodo } from "$/network/todos";

const TaskView: FC<ITaskViewProps> = ({
  selectedTask,
  onEdit,
  setIsEdit,
  isEdit,
  onDelete,
}) => {
  return !isEdit ? (
    <div className="flex flex-col gap-8">
      <p className="text-lg leading-7 text-gray-900 font-semibold font-workSans pr-6">
        {selectedTask?.title ?? ""}
      </p>
      <div className=" flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Calendar className="blue-calendar" />
          <p className="font-workSans text-base font-medium text-black">
            {"Today"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="blue-clock" />
          <p className="font-workSans text-base font-medium text-black">
            8:00 - 10:00 AM
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={async () => {
            onDelete(selectedTask?.id ?? 0);
            deleteTodo({
              id: selectedTask?.id ?? 0,
            });
          }}
          variant="secondary"
        >
          Delete
        </Button>
        <Button onClick={() => setIsEdit(true)} variant="primary">
          Edit
        </Button>
      </div>
    </div>
  ) : (
    <div>
      <TaskForm
        handleSubmit={async (neWInput) => {
          onEdit(selectedTask?.id ?? 0, neWInput);
          const res = await updateTodo({
            completed: !!selectedTask?.completed,
            id: selectedTask?.id ?? 0,
            title: neWInput,
            userId: 10,
          });
          console.log(res);
        }}
        heading="Edit Task"
        task={selectedTask?.title ?? ""}
        time=""
        buttonEls={
          <div className="flex gap-3">
            <Button
              type="button"
              onClick={() => setIsEdit(false)}
              variant="secondary"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default TaskView;
