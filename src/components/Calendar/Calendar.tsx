import { ChevronLeft, ChevronRight } from "$/assets/svg/chevrons";

const Calendar = () => {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex justify-between items-center gap-3">
        <ChevronLeft />
        <p className="text-base font-workSans font-semibold leading-6 text-center text-gray-700">
          January 2023
        </p>
        <ChevronRight />
      </div>
      <div className="flex gap-3 items-center">
        <p className="px-[14px] grow py-2 shadow-one bg-white rounded-lg border-[1px] border-gray-300 text-base text-gray-900 font-normal leading-6 font-workSans">
          {formattedDate}
        </p>
        <p className="shadow-one bg-white rounded-lg border-[1px] border-gray-300 px-4 py-[10px] text-base font-workSans font-semibold leading-5 text-gray-700">
          Today
        </p>
      </div>
      <table className="flex flex-col gap-2">
        <thead>
          <tr className="flex justify-between">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((item) => (
              <th
                key={item}
                className="px-2 py-[10px] flex items-center justify-center flex-1 text-sm font-medium leading-5 font-workSans text-gray-700"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-between">
            {["27", "28", "29", "30", "31", "1", "2"].map((item) => (
              <td
                key={item}
                className={` cursor-pointer flex items-center justify-center text-sm font-medium leading-5 font-workSans hover:bg-primary-50 rounded-full w-[40px] h-[40px] ${
                  item.length === 1 ? "text-gray-700" : "text-gray-400"
                } ${
                  item.length === 1
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
          <tr className="flex justify-between">
            {["3", "4", "5", "6", "7", "8", "9"].map((item) => (
              <td
                key={item}
                className={` cursor-pointer flex items-center justify-center text-sm font-medium leading-5 font-workSans ${
                  dayOfMonth.toString() === item
                    ? "hover:bg-blue-two"
                    : "hover:bg-primary-50"
                } ${
                  dayOfMonth.toString() === item ? "bg-blue-one" : "bg-white"
                } rounded-full w-[40px] h-[40px] ${
                  dayOfMonth.toString() === item
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
          <tr className="flex justify-between">
            {["10", "11", "12", "13", "14", "15", "16"].map((item) => (
              <td
                key={item}
                className={` cursor-pointer flex items-center justify-center text-sm font-medium leading-5 font-workSans ${
                  dayOfMonth.toString() === item
                    ? "hover:bg-blue-two"
                    : "hover:bg-primary-50"
                } ${
                  dayOfMonth.toString() === item ? "bg-blue-one" : "bg-white"
                } rounded-full w-[40px] h-[40px] ${
                  dayOfMonth.toString() === item
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
          <tr className="flex justify-between">
            {["17", "18", "19", "20", "21", "22", "23"].map((item) => (
              <td
                key={item}
                className={` cursor-pointer flex items-center justify-center text-sm font-medium leading-5 font-workSans ${
                  dayOfMonth.toString() === item
                    ? "hover:bg-blue-two"
                    : "hover:bg-primary-50"
                } ${
                  dayOfMonth.toString() === item ? "bg-blue-one" : "bg-white"
                } rounded-full w-[40px] h-[40px] ${
                  dayOfMonth.toString() === item
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
          <tr className="flex justify-between">
            {["24", "25", "26", "27", "28", "29", "30"].map((item) => (
              <td
                key={item}
                className={` cursor-pointer flex items-center justify-center text-sm font-medium leading-5 font-workSans ${
                  dayOfMonth.toString() === item
                    ? "hover:bg-blue-two"
                    : "hover:bg-primary-50"
                } ${
                  dayOfMonth.toString() === item ? "bg-blue-one" : "bg-white"
                } rounded-full w-[40px] h-[40px] ${
                  dayOfMonth.toString() === item
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
          <tr className="flex justify-between">
            {["1", "2", "3", "4", "5", "6", "7"].map((item) => (
              <td
                key={item}
                className="px-2 py-[10px] cursor-pointer flex items-center justify-center text-sm font-medium leading-5 font-workSans text-gray-400 pointer-events-none"
              >
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
