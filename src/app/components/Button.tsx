import { ReactNode } from "react";

interface ButtonProps {
  icon?: ReactNode;
  children: ReactNode;
}
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className=" text-white font-bold py-2 px-4 rounded" {...props}>
      {children}
    </button>
  );
};
