import classnames from 'classnames'

const Button = ({
    click,
    className,
    input,
    children,
    disabled,
    textColor,
    borderColor
}) => {

    return (
        <div
            style={{ borderColor }}
            className={classnames('button', className)}
            onClick={() => !disabled && click(input)}
        >
            <h1
                className={classnames({ 'disabled-button': disabled })}
                style={{ color: textColor }}
            >
                {children}
            </h1>
        </div>
    )
}

export default Button