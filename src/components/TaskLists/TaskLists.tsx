import { FC, useState } from "react";
import { ITaskListsProps } from "./TaskLists.types";
import TaskList from "../TaskList/TaskList";
import Pagination from "../Pagination/Pagination";
import { NUMBER_OF_ITEMS_PER_PAGE } from "$/constants";

const TaskLists: FC<ITaskListsProps> = ({
  onClickTask,
  loading,
  tasks,
  setTasks,
  setTask,
}) => {
  const [page, setPage] = useState<number>(1);
  if (loading) return <p className="text-xl">Loading....</p>;
  const reverseData = [...(tasks ?? [])].reverse();

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {reverseData
          ?.slice(
            (page - 1) * NUMBER_OF_ITEMS_PER_PAGE,
            (page - 1) * NUMBER_OF_ITEMS_PER_PAGE + NUMBER_OF_ITEMS_PER_PAGE
          )
          .map(({ completed, id, title }) => (
            <li key={id}>
              <TaskList
                updateLocalTodos={(id) =>
                  setTasks((prevTasks) =>
                    prevTasks.map((item) =>
                      item.id === id ? { ...item, completed: !completed } : item
                    )
                  )
                }
                id={id}
                title={title}
                completed={completed}
                onClick={onClickTask}
                setTask={setTask}
              />
            </li>
          ))}
      </ul>
      <div className="mt-8">
        {reverseData.length ? (
          <Pagination
            page={page}
            setPage={setPage}
            total={reverseData.length}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TaskLists;
