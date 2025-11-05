import type { FC, ReactNode } from "react";

interface ICustomButton {
    text: string;
    className?: string;
    onClick: () => void;
    disable?: boolean;
    children?: ReactNode;
}

const CustomButton: FC<ICustomButton> = (props) => {
    const { text, className, onClick, disable, children } = props;
  return (
    <button disabled = {disable} onClick={onClick} className={`btn ${className}`}>{text}{children}</button>
  )
}

export default CustomButton