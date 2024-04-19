import { useContext, useRef } from "react";
import { themeContext } from "../Context/ThemeContextProvider";

const Theme = () => {
  const { theme, setTheme } = useContext(themeContext);
  const div = useRef(null);

  const handleClick = () => {
    div.current.style.backgroundColor = theme ? "yellow" : "Black";
    setTheme(!theme);
  };

  return (
    <>
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid",
          color: "white",
        }}
        ref={div}
      >
        Hello
      </div>
      <button onClick={handleClick}>Change theme</button>
    </>
  );
};

export default Theme;
