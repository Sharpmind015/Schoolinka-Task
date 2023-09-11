import { Plus } from "$/assets/svg/plus";
import Container from "$/layouts/Container/Container";
import { FC } from "react";
import Button from "../Button/Button";
import { IIntroProps } from "./Intro.types";

const Intro: FC<IIntroProps> = ({ onClickAdd }) => {
  return (
    <section className="mt-8 md:mt-12">
      <Container className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-semibold leading-8 md:leading-9 text-gray-900 font-sans">
            Good morning!
          </h1>
          <p className="text-base font-normal font-workSans leading-6 text-gray-600">
            You got some task to do.
          </p>
        </div>
        <div className="w-[176px] hidden md:block">
          <Button onClick={onClickAdd} icon={<Plus />} variant="primary">
            Create New Task
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
