import { FC, useState } from "react";
import { ITaskFormProps } from "./TaskForm.types";
import { Calendar } from "$/assets/svg/calendar";
import TimeRange from "$/components/TimeRange/TimeRange";
import { BellTwo } from "$/assets/svg/bell-two";
import { Close } from "$/assets/svg/close";

const TaskForm: FC<ITaskFormProps> = ({
  heading,
  handleSubmit,
  task,
  buttonEls,
}) => {
  const [input, setInput] = useState(task);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit(input);
        setInput("");
      }}
      className="w-full flex flex-col gap-4 mb-8"
    >
      <p className="text-lg leading-7 text-gray-900 font-semibold font-workSans">
        {heading}
      </p>
      <textarea
        required
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="h-[140px] outline-none border-[1px] border-gray-300 focus:border-blue-one bg-gray-50 shadow-one rounded-lg py-3 px-[14px] placeholder:text-sm text-sm placeholder:text-gray-500 text-gray-600 font-normal leading-6 font-workSans"
      ></textarea>
      <div className="flex flex-wrap justify-between items-center grow">
        <button className="py-[10px] px-2 md:px-3 gap-2 flex items-center h-10 text-sm font-semibold font-workSans leading-5 text-gray-500 bg-white border-[1px] rounded-lg border-gray-300">
          <Calendar />
          <span>Today</span>
        </button>
        <TimeRange />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <BellTwo />
          <p className="text-base font-sans font-medium leading=[19px] text-gray-500">
            10 Minute before
          </p>
        </div>
        <button>
          <Close className="w-4 h-4" />
        </button>
      </div>
      {buttonEls}
    </form>
  );
};

export default TaskForm;
