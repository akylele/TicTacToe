import {getText} from "../locales";
import {IHistoryElem} from "../types/types";

interface IStatisticsProps {
    history: IHistoryElem[] | [],
}

const Statistics = ({history}: IStatisticsProps) => {
    const getDescription = (length: number) => {
        return `${length} | ${Math.round(100 / history.length * length)}%`
    }

    return (
        <div className="statistics">
            <table>
                <tr>
                    <td>{getText('allGames')}</td>
                    <td>{history.length}</td>
                </tr>
                <tr>
                    <td>{getText('zerosWin')}</td>
                    <td>{getDescription(history.filter(elem => elem.player === 'zero').length)}</td>
                </tr>
                <tr>
                    <td>{getText('crossesWin')}</td>
                    <td>{getDescription(history.filter(elem => elem.player === 'cross').length)}</td>
                </tr>
                <tr>
                    <td>{getText('draw')}</td>
                    <td>{getDescription(history.filter(elem => elem.player === 'draw').length)}</td>
                </tr>
            </table>
        </div>
    )
}
export default Statistics