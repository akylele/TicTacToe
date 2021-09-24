interface IAlertProps {
    text: string
}

const Alert = ({text}: IAlertProps) => {

    return (
        <div
            className='alertMessage'
        >
            <span>
                {text}
            </span>
        </div>
    )
}

export default Alert