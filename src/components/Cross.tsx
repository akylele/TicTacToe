interface ICrossProps {
    isWin?: boolean,
}

const Cross = ({isWin}: ICrossProps) => (
    <div className={`cross ${isWin ? 'red' : ''}`}>
            <span className="material-icons">
                clear
            </span>
    </div>
)
export default Cross