import Icon from "./Icon";

interface ICrossProps {
    isWin?: boolean,
}

const Cross = ({isWin}: ICrossProps) => (
    <div className={`cross ${isWin ? 'red' : ''}`}>
        <Icon iconName={'clear'}/>
    </div>
)
export default Cross