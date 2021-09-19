interface IZeroProps {
    isWin?: boolean
}

const Zero = ({isWin}: IZeroProps) => {
    return (
        <div className={`zero ${isWin ? 'red' : ''}`}>
            <span className="material-icons">
                radio_button_unchecked
            </span>
        </div>
    )
}

export default Zero