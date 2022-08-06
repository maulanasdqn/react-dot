export interface ButtonDto
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor?: string;
  textColor?: string;
  isPrimary?: boolean;
  showIcon?: boolean;
  type: "button" | "submit" | "reset";
}
