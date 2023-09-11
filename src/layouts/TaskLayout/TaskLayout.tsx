import { FC, useState } from "react";
import { ITaskLayoutProps } from "./TaskLayout.types";
import Container from "../Container/Container";
import useWindowWidth from "$/hooks/useWindowWidth";
import DayCard from "$/components/DayCard/DayCard";
import DesktopActionCard from "$/components/DesktopActionCard/DesktopActionCard";
import MobileActionCard from "$/components/MobileActionCard/MobileActionCard";
import { Microphone } from "$/assets/svg/mic";

const getNext11Days = () => {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const result = [];

  for (let i = 0; i < 11; i++) {
    today.setDate(today.getDate() + 1); // Move to the next day
    const dayOfWeek = days[today.getDay()]; // Get the day of the week
    const dayOfMonth = today.getDate(); // Get the day of the month

    result.push({
      dayOfWeek,
      dayOfMonth,
    });
  }

  return result;
};

const TaskLayout: FC<ITaskLayoutProps> = ({
  actionPane,
  isMobileActionPaneOpen,
  setIsMobileActionPaneOpen,
  onCloseDesktopActionPane,
  status,
  taskLists,
  setStatus,
}) => {
  const windowWidth = useWindowWidth();
  const next11Days = getNext11Days();
  const [activeDay, setIsActiveDay] = useState(next11Days[0].dayOfMonth);

  return (
    <section className="mt-8 mb-10">
      <Container className="flex justify-between">
        <div className="w-full md:w-[65%]">
          <div className="-mr-4 flex flex-col gap-3 md:gap-4 mb-3 md:mb-4">
            <h2 className=" text-[0.75rem] md:text-base font-sans md:font-workSans font-semibold leading-[19px] md:leading-6 text-gray-900">
              January 2023
            </h2>
            <ul className="pl-[3px] list-none flex overflow-auto gap-4 day-list">
              {next11Days.map(({ dayOfMonth, dayOfWeek }) => (
                <li key={dayOfMonth} onClick={() => setIsActiveDay(dayOfMonth)}>
                  <DayCard
                    day={dayOfWeek}
                    number={dayOfMonth}
                    isActive={activeDay === dayOfMonth}
                  />
                </li>
              ))}
            </ul>
          </div>
          {taskLists}
          <button
            onClick={() => {
              setIsMobileActionPaneOpen(true);
              setStatus("add");
            }}
            className="w-full mt-4 flex md:hidden justify-between items-center rounded-lg border-[1px] border-gray-300 bg-gray-50 shadow-one gap-2 py-2 px-3 text-base font-workSans font-normal leading-6 text-gray-600"
          >
            <div className="grow text-left">Input task</div>
            <Microphone />
          </button>
        </div>
        {windowWidth >= 768 ? (
          <div className="w-full md:w-[32%] hidden md:block border-l-[1px] border-l-gray-200 pl-6">
            <DesktopActionCard
              onClose={onCloseDesktopActionPane}
              status={status}
            >
              {actionPane}
            </DesktopActionCard>
          </div>
        ) : (
          <MobileActionCard
            isOpen={isMobileActionPaneOpen}
            setIsOpen={setIsMobileActionPaneOpen}
          >
            {actionPane}
          </MobileActionCard>
        )}
      </Container>
    </section>
  );
};

export default TaskLayout;
