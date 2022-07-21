import "./layout.css";
import { Children } from "../../types/global";
import { Footer } from "./components/footer/footer";
import { NavbarDesktop } from "./components/navbar/desktop/navbarDesktop";
import { NavbarMobile } from './components/navbar/mobile/navbarMobile';

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
