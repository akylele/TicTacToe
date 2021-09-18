const Button = ({width, children, ...props}) => (
    <div
        className='button'
        style={{width}}
        {...props}
    >
        {children}
    </div>
)
export default Button