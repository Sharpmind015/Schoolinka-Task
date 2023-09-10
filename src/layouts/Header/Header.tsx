import { Bell } from "$/assets/svg/bell";
import { Hamburger } from "$/assets/svg/hamburger";
import { Logo } from "$/assets/svg/logo";
import { Settings } from "$/assets/svg/settings";
import Container from "$/layouts/Container/Container";
import Avartar from "$/assets/img/avatar.png";

const Header = () => {
  return (
    <header className=" pt-11 pb-3 md:py-4 border-b-[1px] border-b-gray-200">
      <Container className="flex justify-between items-center">
        <Logo />
        <button className="block md:hidden">
          <Hamburger />
        </button>
        <div className="hidden md:flex items-center">
          <button className="w-10 h-10 flex items-center justify-center">
            <Settings />
          </button>
          <button className="w-10 h-10 flex items-center justify-center mr-4">
            <Bell />
          </button>
          <img src={Avartar} alt="" width={40} height={40} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
