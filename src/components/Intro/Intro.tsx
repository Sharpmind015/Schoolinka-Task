import Container from "$/layouts/Container/Container";

const Intro = () => {
  return (
    <section className="mt-8 md:mt-12">
      <Container className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-semibold leading-8 md:leading-9 text-gray-900 font-sans">
          Good morning!
        </h1>
        <p className="text-base font-normal font-workSans leading-6 text-gray-600">
          You got some task to do.
        </p>
      </Container>
    </section>
  );
};

export default Intro;
