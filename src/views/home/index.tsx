// Import Layouts from Components directory
import { ReactElement } from "react";
import { Layouts } from "../../components/Layouts/index";

// Head Content
const HeadContent = (): ReactElement => {
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Test Drive</h1>
    </>
  );
};

// Home Entrypoint with Layouts Components
export const Home = (): ReactElement => {
  return (
    <>
      <Layouts content={<HeadContent />} bgColor="bg-gray-800" />
    </>
  );
};
