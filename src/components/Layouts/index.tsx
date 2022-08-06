import { ReactElement } from "react";
import { LayoutsDto } from "../../utilities/dto/layouts.dto";

export const Layouts = (props: LayoutsDto): ReactElement => {
  const { content, bgColor, textColor }: LayoutsDto = props;
  return (
    <>
      <div
        className={` ${bgColor} ${textColor} flex items-center justify-center w-full h-screen`}
      >
        {content}
      </div>
    </>
  );
};
