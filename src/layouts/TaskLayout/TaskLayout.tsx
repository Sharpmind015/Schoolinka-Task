import { FC } from "react";
import { ITaskLayoutProps } from "./TaskLayout.types";
import Container from "../Container/Container";
import useWindowWidth from "$/hooks/useWindowWidth";
import DayCard from "$/components/DayCard/DayCard";
import DesktopActionCard from "$/components/DesktopActionCard/DesktopActionCard";
import MobileActionCard from "$/components/MobileActionCard/MobileActionCard";

const TaskLayout: FC<ITaskLayoutProps> = ({
  actionPane,
  isMobileActionPaneOpen,
  setIsMobileActionPaneOpen,
  onCloseDesktopActionPane,
  status,
  taskLists,
}) => {
  const windowWidth = useWindowWidth();

  return (
    <section className="mt-8">
      <Container className="flex justify-between">
        <div className="w-full md:w-[65%]">
          <div className="-mr-4 flex flex-col gap-3 md:gap-4 mb-3 md:mb-4">
            <h2 className=" text-[0.75rem] md:text-base font-sans md:font-workSans font-semibold leading-[19px] md:leading-6 text-gray-900">
              January 2023
            </h2>
            <ul className="pl-[3px] list-none flex overflow-auto gap-4 day-list">
              <li onClick={() => setIsMobileActionPaneOpen(true)}>
                <DayCard day="Mon" number={1} isActive={false} />
              </li>
              <li>
                <DayCard day="Tue" number={2} isActive={true} />
              </li>
              <li>
                <DayCard day="Wed" number={3} isActive={false} />
              </li>
              <li>
                <DayCard day="Thur" number={4} isActive={false} />
              </li>
              <li>
                <DayCard day="Fri" number={5} isActive={false} />
              </li>
              <li>
                <DayCard day="Sat" number={6} isActive={false} />
              </li>
              <li>
                <DayCard day="Sun" number={7} isActive={false} />
              </li>
              <li>
                <DayCard day="Mon" number={8} isActive={false} />
              </li>
              <li>
                <DayCard day="Tue" number={9} isActive={false} />
              </li>
              <li>
                <DayCard day="Wed" number={10} isActive={false} />
              </li>
              <li>
                <DayCard day="Thur" number={11} isActive={false} />
              </li>
            </ul>
          </div>
          {taskLists}
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
