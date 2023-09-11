import { ReactNode, SetStateAction } from "react";

export interface IMobileActionCardProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
