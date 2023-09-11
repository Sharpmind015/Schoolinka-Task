import { Clock } from "$/assets/svg/clock";

const TimeRange = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <button className="py-[10px]  px-2 md:px-3 flex items-center h-10 text-sm font-semibold leading-5 text-gray-500 gap-2 bg-white border-[1px] rounded-lg border-gray-300 font-workSans">
        <Clock />
        <span>10:30 am</span>
      </button>
      <button className="py-[10px]  px-2 md:px-3 flex items-center h-10 text-sm font-semibold leading-5 text-gray-500 gap-2 bg-white border-[1px] rounded-lg border-gray-300 font-workSans">
        <Clock />
        <span>11:30 am</span>
      </button>
    </div>
  );
};

export default TimeRange;
