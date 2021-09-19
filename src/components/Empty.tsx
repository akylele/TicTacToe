import React from "react";

interface IEmptyProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Empty = (props: IEmptyProps) => (
    <div className="empty" {...props}>
        <span className="material-icons"/>
    </div>
)

export default Empty