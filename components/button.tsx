import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-dark-green rounded-2xl w-5/6 text-white text-center max-w-xs my-4 min-w-max ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
