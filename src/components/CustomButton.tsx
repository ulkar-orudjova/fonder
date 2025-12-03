import type { FC, ReactNode } from "react";

interface ICustomButton {
    text: string;
    className?: string;
    onClick: () => void;
    disable?: boolean;
    children?: ReactNode;
    type?: "button" | "submit" | "reset";
}

const CustomButton: FC<ICustomButton> = (props) => {
    const { text, className, onClick, disable, children, type = "button"} = props;
  return (
    <button disabled = {disable} type={type} onClick={onClick} className={`btn ${className}`}>{text}{children}</button>
  )
}

export default CustomButton