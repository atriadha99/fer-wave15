import { Link } from "react-router-dom";
import Picture from "components/atoms/Picture";
import Logo from "assets/icons/car-roof-box.png";

const NavLogo = () => {
  return (
    <div className="lg:px-20">
      <Link
        to="/"
        className="flex flex-row items-center font-semibold uppercase"
      >
        <Picture fileName={Logo} className={"mt-2 mr-2 flex w-11"} />
        <p className="mt-2 font-bold text-gray-700 antialiased hover:text-gray-700 hover:underline dark:text-white">
          patarebenezer
        </p>
      </Link>
    </div>
  );
};

export default NavLogo;
