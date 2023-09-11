import { FC, useRef } from "react";
import { ITaskListProps } from "./TaskList.types";
import { Check } from "$/assets/svg/check";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "$/network/todos";

const TaskList: FC<ITaskListProps> = ({ completed, onClick, id, title }) => {
  const checkboxRef = useRef<HTMLButtonElement | null>(null);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return (
    <div
      onClick={(e) => {
        console.log(e.target, checkboxRef?.current);
        onClick(id);
      }}
      className={`border-[1px] border-gray-200 bg-gray-50 flex justify-between items-center py-4 px-6 cursor-pointer `}
    >
      <div className="flex gap-3 items-center">
        <button
          //   onMouseDown={() => {
          //     setOnCheckbox(true);
          //   }}
          onClick={() => {
            // setOnCheckbox(true);
            mutation.mutate({
              id,
              completed: !completed,
              title: title,
            });
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
        <div className="flex flex-col gap-1">
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
      <p className="text-sm font-workSans font-normal leading-5 text-gray-600">
        Today
      </p>
    </div>
  );
};

export default TaskList;
