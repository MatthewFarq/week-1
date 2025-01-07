import { FC } from "react";

interface ButtonProps {
  text: string; // The label for the button
  color: string; // The Tailwind color classes for the button
}

const Button: FC<ButtonProps> = ({ color, text }) => {
  return (
    <button
      className={`px-8 py-4 text-white text-4xl rounded-full transition-all duration-500 shadow hover:shadow-lg ${color}`}
    >
      {text}
    </button>
  );
};

export default Button;
