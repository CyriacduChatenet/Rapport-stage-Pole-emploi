import { Link } from "react-router-dom";
import "./navbarMobile.css";
import { NavbarMenu } from "./components/navbarMenu";
import { useState } from "react";

export const NavbarMobile = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <nav id="navbarMobile">
        <Link to="/" className="logoLink">
          Stage Pole emploi
        </Link>
        <button className="menuButton" onClick={() => setMenuState(!menuState)}>
          {menuState === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
              ></path>
            </svg>
          )}
        </button>
      </nav>
      {menuState === true ? <NavbarMenu /> : null}
    </>
  );
};
