interface IAlertProps {
    text: string
}

const Alert = ({text}: IAlertProps) => {

    return (
        <div
            className='alert'
        >
            {text}
        </div>
    )
}

export default Alert