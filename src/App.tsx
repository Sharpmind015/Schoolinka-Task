import { useState } from "react";
import Header from "$/layouts/Header/Header";
import Intro from "./components/Intro/Intro";
import TaskLayout from "./layouts/TaskLayout/TaskLayout";
import CreateTask from "./components/CreateTask/CreateTask";
import { Status } from "./types/global";
import TaskView from "./components/TaskView/TaskView";
import TaskLists from "./components/TaskLists/TaskLists";

function App() {
  const [isMobileActionPaneOpen, setIsMobileActionPaneOpen] =
    useState<boolean>(false);
  const [status, setStatus] = useState<Status>("init");

  const actionPane =
    status === "init" ? (
      <></>
    ) : status === "add" ? (
      <CreateTask />
    ) : (
      <TaskView />
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
        onCloseDesktopActionPane={() => setStatus("init")}
        taskLists={
          <TaskLists
            onClickTask={() => {
              setIsMobileActionPaneOpen(true);
              setStatus("view");
            }}
          />
        }
      />
    </>
  );
}

export default App;
