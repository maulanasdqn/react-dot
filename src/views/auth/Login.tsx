import { Layouts } from "../../components/Layouts";

const LoginContent = () => {
  return (
    <>
      <h1 className="text-white font-medium text-2xl">Login</h1>
    </>
  );
};

export const Login = () => {
  return (
    <>
      <Layouts bgColor="bg-gray-800" content={<LoginContent />} />
    </>
  );
};
