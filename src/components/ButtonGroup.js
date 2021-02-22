import classnames from 'classnames'

const ButtonGroup = ({ children, borderColor, manual, className }) => {
    return (
        <div 
            className={classnames('button-group', className, { 'button-group-borders': !manual })}
            style={{ borderColor }}
        >
            { children }
        </div>
    )
}

export default ButtonGroup