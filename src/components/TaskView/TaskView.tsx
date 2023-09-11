import { Calendar } from "$/assets/svg/calendar";
import { Clock } from "$/assets/svg/clock";
import { useState } from "react";
import Button from "../Button/Button";
import TaskForm from "../TaskForm/TaskForm";

const TaskView = () => {
  const [isEdit, setIsEdit] = useState(false);
  return !isEdit ? (
    <div className="flex flex-col gap-8">
      <p className="text-lg leading-7 text-gray-900 font-semibold font-workSans">
        Create Wireframe
      </p>
      <div className=" flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Calendar className="blue-calendar" />
          <p className="font-workSans text-base font-medium text-black">
            20th January, 2023
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
        <Button variant="secondary">Delete</Button>
        <Button onClick={() => setIsEdit(true)} variant="primary">
          Edit
        </Button>
      </div>
    </div>
  ) : (
    <div>
      <TaskForm
        handleSubmit={() => console.log("e")}
        heading="Edit Task"
        task="Create wireframe"
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
