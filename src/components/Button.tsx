import React from "react";

interface IButtonProps {
    width?: string,
    // mobWidth?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
    children?: React.ReactNode,
    disabled?: boolean
}

const Button = ({width, children, onClick, disabled, ...props}:  IButtonProps) => (
    <div
        className={`button ${disabled ? 'disabled' : ''}`}
        style={{width: width || 'auto'}}
        onClick={!disabled ? onClick : () => {}}
        {...props}
    >
        {children}
    </div>
)
export default Button