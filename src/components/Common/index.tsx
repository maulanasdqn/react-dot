import { ReactElement } from "react";
import { TextFieldDto } from "../../utilities/dto/textfield.dto";

export const TextField: React.FC<TextFieldDto> = (
  props: TextFieldDto
): ReactElement => {
  const { name, placeholder, color, type, label, value, onChange } = props;
  return (
    <section className="flex flex-col gap-y-2">
      <label className="block font-medium text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${color}`}
        value={value}
        onChange={onChange}
      />
    </section>
  );
};
