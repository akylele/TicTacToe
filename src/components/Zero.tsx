import Icon from "./Icon";

interface IZeroProps {
    isWin?: boolean
}

const Zero = ({isWin}: IZeroProps) => {
    return (
        <div className={`zero ${isWin ? 'red' : ''}`}>
            <Icon iconName={'radio_button_unchecked'}/>
        </div>
    )
}

export default Zero