import { ReactElement } from "react";
import Logo from "../../assets/react.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Navbar = (): ReactElement => {
  return (
    <header className="flex h-[60px] gap-x-4 px-8 bg-white w-full items-center">
      <figure className="navbar-figure">
        <img width="40" src={Logo} alt="react-logo" />
      </figure>
      <nav className="flex justify-between w-full items-center">
        <div className="flex gap-x-4">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">About</Link>
        </div>
        <div className="flex gap-x-4">
          <Link to="/login">
            <Button type="button" bgColor="bg-blue-400" text="Login" />
          </Link>
          <Link to="/register">
            <Button type="button" text="Register" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
