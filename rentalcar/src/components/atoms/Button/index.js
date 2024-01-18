import { Link } from "react-router-dom";
const Button = ({ name_btn, cls, href }) => {
  return (
    <Link to={href} className={name_btn === "Edit" ? "mt-1 w-full" : ""}>
      <button
        className={`${cls} px-3 text-white ${
          name_btn === "Edit" ? "py-1.5" : "py-2"
        } rounded-md font-bold`}
      >
        {name_btn}
      </button>
    </Link>
  );
};

export default Button;
