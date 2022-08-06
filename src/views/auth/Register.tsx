import { Layouts } from "../../components/Layouts";

const RegisterContent = () => {
  return (
    <>
      <h1>Register</h1>
    </>
  );
};

export const Register = () => {
  return (
    <>
      <Layouts bgColor="dark" textColor="blue" content={<RegisterContent />} />
    </>
  );
};
