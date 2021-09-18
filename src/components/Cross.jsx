const Cross = ({isWin}) => (
    <div className={`cross ${isWin ? 'red' : ''}`}>
            <span className="material-icons">
                clear
            </span>
    </div>
)
export default Cross