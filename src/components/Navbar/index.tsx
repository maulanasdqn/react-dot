import { ReactElement, useEffect, useState } from "react";
import Logo from "../../assets/react.svg";
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { TokenService } from "../../services/token/index.services";
import { AuthService } from "../../services/auth/index.services";
import { UsersService } from "../../services/user/index.services";
import { UserDto } from "../../utilities/dto/users.dto";

export const Navbar = (): ReactElement => {
  const [users, setUsers] = useState([
    {
      fullname: "",
    },
  ]);

  const fullname: string = users[0].fullname;

  const isLoggedIn = !!TokenService.getToken();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    AuthService.logout();
    navigate("/", { replace: true });
  };

  const handleMe = async (): Promise<UserDto> => {
    const me = await UsersService.retrieveMe();
    setUsers(me);
    return me;
  };

  useEffect(() => {
    if (isLoggedIn) {
      handleMe();
    }
  }, [isLoggedIn]);

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
        {!isLoggedIn ? (
          <div className="flex gap-x-4">
            <Link to="/login">
              <Button type="button" text="Login" />
            </Link>
            <Link to="/register">
              <Button type="button" text="Register" />
            </Link>
          </div>
        ) : (
          <div className="flex gap-x-4 items-center">
            <Button type="button" text={fullname} />
            <span
              className="text-red-400 font-medium text-xl"
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
        )}
      </nav>
    </header>
  );
};
