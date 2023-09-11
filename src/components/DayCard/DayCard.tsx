import { FC } from "react";
import { IDayCardProps } from "./DayCard.types";

const DayCard: FC<IDayCardProps> = ({ day, number, isActive }) => {
  return (
    <button
      className={`w-[50px] md:w-[62px] h-[54px] md:h-[68px] rounded-md flex flex-col items-center justify-center border-[0.8px] py-[8px] md:py-[10px] px-[13px] md:px-4 text-[0.75rem] md:text-sm font-semibold font-sans md:font-workSans leading-[15px] md:leading-4 ${
        !isActive ? "border-gray-300" : "border-blue-one"
      }  ${!isActive ? "bg-white" : "bg-blue-one"} ${
        !isActive ? "text-gray-700" : "text-white"
      }`}
    >
      <span className="inline-block mb-[6px] md:mb-2">{day}</span>
      <span>{number}</span>
    </button>
  );
};

export default DayCard;
