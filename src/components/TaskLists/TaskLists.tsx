import { FC, useState } from "react";
import { ITaskListsProps } from "./TaskLists.types";
import TaskList from "../TaskList/TaskList";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "$/network/todos";
import Pagination from "../Pagination/Pagination";
import { NUMBER_OF_ITEMS_PER_PAGE } from "$/constants";

const TaskLists: FC<ITaskListsProps> = ({ onClickTask }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  const [page, setPage] = useState<number>(1);
  console.log(data);
  if (isLoading) return <p className="text-xl">Loading....</p>;

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {data?.data
          .slice(
            (page - 1) * NUMBER_OF_ITEMS_PER_PAGE,
            (page - 1) * NUMBER_OF_ITEMS_PER_PAGE + NUMBER_OF_ITEMS_PER_PAGE
          )
          .map(({ completed, id, title }) => (
            <li key={id}>
              <TaskList
                id={id}
                title={title}
                completed={completed}
                onClick={onClickTask}
              />
            </li>
          ))}
      </ul>
      <div className="mt-8">
        {data?.data.length ? (
          <Pagination page={page} setPage={setPage} total={data?.data.length} />
        ) : null}
      </div>
    </div>
  );
};

export default TaskLists;
