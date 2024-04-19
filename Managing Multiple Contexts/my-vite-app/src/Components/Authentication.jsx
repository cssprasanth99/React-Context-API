import { useContext } from "react";
import { authContext } from "../Context/AuthContextProvider"; // Corrected import

const Authentication = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);

  function handleClick() {
    console.log(isLoggedIn);
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>
          {isLoggedIn ? "Logged out" : "Logged in"}
        </button>
      </div>
    </div>
  );
};

export default Authentication;
