import { Close } from "$/assets/svg/close";
import { FC } from "react";
import { IMobileActionCardProps } from "./MobileActionCard.types";

const MobileActionCard: FC<IMobileActionCardProps> = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={`fixed w-full h-full transition-opacity duration-100 z-[100] top-0 left-0 ${
        isOpen ? "opacity-100" : "opacity-0"
      } ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="bg-black bg-opacity-40 w-full h-full"
      />
      <div
        className={`min-h-[300px] absolute p-6 w-full h-fit bg-white rounded-t-[28px] shadow-two transition-all duration-300 delay-100 ${
          !isOpen ? "-bottom-full" : "bottom-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6"
        >
          <Close />
        </button>
        {children}
      </div>
    </div>
  );
};

export default MobileActionCard;
