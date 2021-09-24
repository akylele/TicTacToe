interface IIconProps {
    iconName: string
}

const Icon = ({iconName}: IIconProps) => (
    <span className="material-icons">
        {iconName}
    </span>
)

export default Icon