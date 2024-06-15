import { ReactNode } from "react";

interface BoxProps {
    children: ReactNode;
    title?: string;
    className?: string
}

const Box = ({ children, title, className }: BoxProps) => {
    return (
        <div className={`w-auto  ${className}`}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}

export default Box;