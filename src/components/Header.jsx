import Logo from "../assets/images/logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
      <img src={Logo} alt="" />
      <Navbar />
    </header>
  );
};

export default Header;
