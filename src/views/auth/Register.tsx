import { ReactElement } from "react";
import { Layouts } from "../../components/Layouts";

const RegisterContent = (): ReactElement => {
  return (
    <>
      <h1>Register</h1>
    </>
  );
};

export const Register = (): ReactElement => {
  return (
    <>
      <Layouts bgColor="dark" textColor="blue" content={<RegisterContent />} />
    </>
  );
};
