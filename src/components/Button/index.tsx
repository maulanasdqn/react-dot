import { ButtonDto } from "../../utilities/dto/button.dto";
import { ReactElement } from "react";

export const Button: React.FC<ButtonDto> = (props: ButtonDto): ReactElement => {
  const { text, isPrimary, textColor = "text-white", bgColor = "bg-blue-400", type } = props;
  return (
    <>
      <button
        type={type}
        className={` ${textColor} ${bgColor} ${
          isPrimary
            ? "hover:bg-blue-600 text-white"
            : "hover:border-white hover:ring-blue-400 hover:bg-blue-400 hover:text-white border-1 border-blue-400 bg-white text-blue-400"
        } rounded-lg w-auto h-auto p-2`}
      >
        {text}
      </button>
    </>
  );
};
