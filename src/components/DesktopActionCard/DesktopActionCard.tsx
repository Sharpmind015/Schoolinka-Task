import { FC, useEffect, useRef } from "react";
import { IDesktopActionCardProps } from "./DesktopActionCard.types";
import { Close } from "$/assets/svg/close";

const DesktopActionCard: FC<IDesktopActionCardProps> = ({
  children,
  onClose,
  status,
}) => {
  const cardInnerRef = useRef<HTMLDivElement | null>(null);
  const cardOuterRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cardInnerEl = cardInnerRef.current;
    const cardOuterEl = cardOuterRef?.current;
    const observer = new ResizeObserver(() => {
      if (cardOuterEl && cardInnerEl)
        cardOuterEl.style.height = `calc(${cardInnerEl.clientHeight}px + 48px)`;
    });
    if (cardInnerEl) observer.observe(cardInnerEl);

    return () => {
      if (cardInnerEl) observer.unobserve(cardInnerEl);
    };
  }, []);

  return (
    <article
      ref={cardOuterRef}
      className="relative shadow-two w-full rounded-lg bg-white border-gray-100 border-[1px] transition-all duration-300 p-6"
    >
      {status !== "init" ? (
        <button onClick={onClose} className="absolute top-6 right-6">
          <Close />
        </button>
      ) : null}
      <div className=" transition-all duration-300" ref={cardInnerRef}>
        {children}
      </div>
    </article>
  );
};

export default DesktopActionCard;
