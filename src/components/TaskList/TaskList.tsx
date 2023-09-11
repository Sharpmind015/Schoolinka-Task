import { FC, useRef } from "react";
import { ITaskListProps } from "./TaskList.types";
import { Check } from "$/assets/svg/check";
import { updateTodo } from "$/network/todos";

const TaskList: FC<ITaskListProps> = ({
  completed,
  onClick,
  id,
  title,
  updateLocalTodos,
  setTask,
}) => {
  const checkboxRef = useRef<HTMLButtonElement | null>(null);
  const handleClick = () => {
    onClick(id);
    setTask({
      completed,
      id,
      title,
      userId: 10,
    });
  };
  return (
    <div
      //   onClick={(event) => {
      //     handleClick(event);
      //   }}
      className={`border-[1px] border-gray-200 bg-gray-50 flex justify-between items-center py-4 px-6 cursor-pointer `}
    >
      <div
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            console.log(event.target, checkboxRef?.current);
            handleClick();
          }
        }}
        className="flex gap-3 items-center"
      >
        <button
          //   onMouseDown={() => {
          //     setOnCheckbox(true);
          //   }}
          onClick={async () => {
            // setOnCheckbox(true);
            updateLocalTodos(id);
            const res = await updateTodo({
              id,
              completed: !completed,
              title: title,
              userId: 10,
            });
            console.log(res);
          }}
          //   onMouseOver={() => {
          //     setOnCheckbox(true);
          //   }}
          //   onMouseLeave={() => {
          //     setOnCheckbox(false);
          //   }}
          ref={checkboxRef}
          role="checkbox"
          aria-label="Click to toggle on and off completed status for todo"
          className={` border-[1px] rounded-md h-5 w-5 flex items-center justify-center hover:bg-primary-50 transition-all ${
            completed ? "bg-primary-50" : "bg-white"
          } ${completed ? "border-blue-one" : "border-gray-300"}`}
        >
          <Check
            className={`${
              completed ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          />
        </button>
        <div
          onClick={() => {
            handleClick();
          }}
          className="flex flex-col gap-1"
        >
          <p
            className={`text-sm font-workSans font-medium leading-5 ${
              completed ? "text-gray-300" : "text-gray-900"
            } ${completed ? "decoration-line" : ""}`}
          >
            {title}
          </p>
          <p
            className={`text-sm font-workSans font-normal leading-5 ${
              completed ? "decoration-line" : ""
            } ${completed ? "text-gray-300" : "text-gray-600"}`}
          >
            12:30 pm - 1:30 pm
          </p>
        </div>
      </div>
      <p
        onClick={() => {
          handleClick();
        }}
        className="text-sm font-workSans font-normal leading-5 text-gray-600"
      >
        Today
      </p>
    </div>
  );
};

export default TaskList;
