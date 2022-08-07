export interface TextFieldDto
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  color?: string;
  placeholder: string;
  type: "text" | "password" | "number";
  label: string;
  value: string | number;
}
