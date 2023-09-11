import { Status } from "$/types/global";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ITaskLayoutProps {
  actionPane: ReactNode;
  isMobileActionPaneOpen: boolean;
  setIsMobileActionPaneOpen: Dispatch<SetStateAction<boolean>>;
  status: Status;
  setStatus: Dispatch<SetStateAction<Status>>;
  onCloseDesktopActionPane: () => void;
  taskLists: ReactNode;
}
