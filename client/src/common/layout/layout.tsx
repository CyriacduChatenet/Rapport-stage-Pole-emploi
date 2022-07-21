import "./layout.css";
import { Children } from "../types/global";
import { Footer } from "./footer/footer";
import { NavbarDesktop } from "./navbar/desktop/navbarDesktop";
import { NavbarMobile } from './navbar/mobile/navbarMobile';

export const Layout = ({ children }: Children) => {
  return (
    <>
      <header>
        {window.innerWidth <= 999 ? <NavbarMobile /> : <NavbarDesktop />}
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
