import { useEffect, useState } from "react";
import Header from "$/layouts/Header/Header";
import Intro from "$/components/Intro/Intro";
import TaskLayout from "$/layouts/TaskLayout/TaskLayout";
import CreateTask from "$/components/CreateTask/CreateTask";
import { ITask, Status } from "$/types/global";
import TaskView from "$/components/TaskView/TaskView";
import TaskLists from "$/components/TaskLists/TaskLists";
import { getTodos } from "$/network/todos";
import Calendar from "$/components/Calendar/Calendar";

function App() {
  const [isMobileActionPaneOpen, setIsMobileActionPaneOpen] =
    useState<boolean>(false);
  const [status, setStatus] = useState<Status>("init");
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<ITask[]>([]);
  const [todo, setTodo] = useState<ITask | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await getTodos();
    setTodos(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const actionPane =
    status === "init" ? (
      <Calendar />
    ) : status === "add" ? (
      <CreateTask
        refetchTasks={(task) => setTodos((prevTodos) => [...prevTodos, task])}
      />
    ) : (
      <TaskView
        onEdit={(id, newTitle) => {
          setTodos((prevTodos) =>
            prevTodos.map((item) =>
              item.id === id ? { ...item, title: newTitle } : item
            )
          );
        }}
        onDelete={(id) => {
          console.log(id);
          setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
          setStatus("add");
        }}
        selectedTask={todo}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    );

  return (
    <>
      <Header />
      <Intro onClickAdd={() => setStatus("add")} />
      <TaskLayout
        isMobileActionPaneOpen={isMobileActionPaneOpen}
        setIsMobileActionPaneOpen={setIsMobileActionPaneOpen}
        actionPane={actionPane}
        status={status}
        setStatus={setStatus}
        onCloseDesktopActionPane={() => setStatus("init")}
        taskLists={
          <TaskLists
            setTasks={setTodos}
            onClickTask={() => {
              setIsMobileActionPaneOpen(true);
              setStatus("view");
              setIsEdit(false);
            }}
            setTask={setTodo}
            loading={loading}
            tasks={todos}
          />
        }
      />
    </>
  );
}

export default App;
