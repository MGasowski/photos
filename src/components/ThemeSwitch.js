import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
const ThemeSwitch = () => {
  const [dark, setDark] = useState(false);
  const handleTheme = () => {
    dark
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");

    setDark((current) => !current);
  };

  return (
    <div
      className="p-6 bg-indigo-800 absolute top-0 right-24 rounded-xl rounded-t-none shadow-md animate-bounce hover:animate-none hover:cursor-pointer"
      onClick={handleTheme}
    >
      <span className="text-amber-300">
        {dark ? <BsSunFill /> : <FaMoon />}
      </span>
    </div>
  );
};

export default ThemeSwitch;
