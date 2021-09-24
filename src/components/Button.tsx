import React from "react";

interface IButtonProps {
    width?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
    children?: React.ReactNode,
    disabled?: boolean
}

const Button = ({children, onClick, disabled, ...props}:  IButtonProps) => (
    <div
        className={`button ${disabled ? 'disabled' : ''}`}
        onClick={!disabled ? onClick : () => {}}
        {...props}
    >
        {children}
    </div>
)
export default Button