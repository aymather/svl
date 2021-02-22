import Music from './Music'
import Template from './Template'
import Title from './Title'

const Prompt = ({ text, children }) => {
    return (
        <Template bgColor='#FFFF00' style={{ border: '1px solid #000' }}>
            <Title textColor='#000' />
            <Music color='#000' />
            <div className='prompt-text'>
                <h1>{ text }</h1>
            </div>
            { children }
        </Template>
    )
}

export default Prompt