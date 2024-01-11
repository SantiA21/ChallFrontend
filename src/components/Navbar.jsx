import burgerMenu from "../assets/images/icon-menu.svg";

export const Navbar = () => {
  return (
    <>
      <ul className="text-[18px] sm:w-[438px] hidden sm:flex sm:place-content-around sm:text-[16px] sm:items-center ">
        <li className="hover:text-SoftOrange">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-SoftOrange">
          <a href="#">New</a>
        </li>
        <li className="hover:text-SoftOrange">
          <a href="#">Popular</a>
        </li>
        <li className="hover:text-SoftOrange">
          <a href="#">Trending</a>
        </li>
        <li className="hover:text-SoftOrange">
          <a href="#">Categories</a>
        </li>
      </ul>
      <img className="w-10 h-4 cursor-pointer sm:hidden" src={burgerMenu} alt="Menu hamburguesa" />
    </>
  );
};
