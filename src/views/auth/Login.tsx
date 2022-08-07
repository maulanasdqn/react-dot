import React, { ReactElement, useState, FormEvent } from "react";
import { Button } from "../../components/Button";
import { TextField } from "../../components/Common";
import { Layouts } from "../../components/Layouts";
import { AuthService } from "../../services/auth/index.services";
import { getErrorMessage } from "../../utilities/helper";
import { useNavigate } from "react-router-dom";

const LoginContent = (): ReactElement => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    try {
      e.preventDefault();
      const payload = {
        email,
        password,
      };
      await AuthService.login(payload);
      navigate("/");
    } catch (err) {
      setMessage(getErrorMessage(err));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 rounded-lg max-w-xl">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">
            Login to your account
          </h3>
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => onLogin(e)}
            className="flex flex-col gap-y-4"
          >
            <TextField
              name={"email"}
              placeholder={"Email"}
              type={"text"}
              label={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              label={"Password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              text="Login"
              type={"submit"}
              bgColor={"border-green-400"}
              textColor={"text-green-400"}
            />
            <h1>{message}</h1>
          </form>
        </div>
      </div>
    </>
  );
};

export const Login = (): ReactElement => {
  return (
    <>
      <Layouts bgColor="bg-gray-800" content={<LoginContent />} />
    </>
  );
};
