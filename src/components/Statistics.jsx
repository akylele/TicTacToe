import {getText} from "../locales";

const Statistics = ({history}) => {
    return (
        <div className="statistics">
            <table>
                <tr>
                    <td>{getText('allGames')}</td>
                    <td>{history.length}</td>
                </tr>
                <tr>
                    <td>{getText('zerosWin')}</td>
                    <td>{history.filter(elem => elem.player === 'zero').length}</td>
                </tr>
                <tr>
                    <td>{getText('crossesWin')}</td>
                    <td>{history.filter(elem => elem.player === 'cross').length}</td>
                </tr>
                <tr>
                    <td>{getText('draw')}</td>
                    <td>{history.filter(elem => elem.player === 'draw').length}</td>
                </tr>
            </table>
        </div>
    )
}
export default Statistics