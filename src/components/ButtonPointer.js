import classnames from 'classnames'
import { Arrow } from '../svg'

const ButtonPointer = ({ text, className, color }) => {

    return (
        <div className={classnames('button-pointer', className)}>
            { text && <p className='button-pointer-text highlight-text'>click here</p> }
            <Arrow color={color} />
        </div>
    )
}

export default ButtonPointer