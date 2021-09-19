import React from "react";

interface IButtonProps {
    width?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
    children?: React.ReactNode,
}

const Button = ({width, children, ...props}:  IButtonProps) => (
    <div
        className='button'
        style={{width}}
        {...props}
    >
        {children}
    </div>
)
export default Button