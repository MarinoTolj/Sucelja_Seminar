import { ReactNode } from "react";

type PropType = {
  children: ReactNode;
  className?: string;
  onClick?: () => any;
};

const Button: React.FC<PropType> = (props) => {
  return (
    <button
      className={`bg-dark-green rounded-2xl w-5/6 text-white text-center max-w-xs my-4 min-w-max ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
