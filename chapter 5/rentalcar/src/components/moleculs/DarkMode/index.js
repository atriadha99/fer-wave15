import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

const DarkMode = () => {
  const [colorTheme, setColorTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setColorTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      className="ml-4 mt-4 lg:ml-0 lg:mt-0"
      checked={darkSide}
      onChange={toggleDarkMode}
      size={26}
    />
  );
};

export default DarkMode;
