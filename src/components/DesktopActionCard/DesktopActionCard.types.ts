import { Status } from "$/types/global";
import { ReactNode } from "react";

export interface IDesktopActionCardProps {
  children: ReactNode;
  onClose: () => void;
  status: Status;
}
