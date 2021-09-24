import React from "react";

interface IEmptyProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Empty = (props: IEmptyProps) => (
    <div className="empty" {...props}/>
)

export default Empty