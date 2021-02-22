import classnames from 'classnames'

const Template = ({ children, style, className, bgColor = '#000' }) => {
    return (
        <div className='template-wrap' style={{ backgroundColor: bgColor }}>
            <div className={classnames('template', className)} style={style}>
                { children }
            </div>
        </div>
    )
}

export default Template