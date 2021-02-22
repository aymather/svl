import { Logo } from '../svg'

const Manifesto = () => {

    return (
        <div className='manifesto'>
            <div className='manifesto-subwrap'>
                <h1 className='manifesto-title'>STAR<br/>VS<br/>LEADER</h1>
                <p className='manifesto-subtitle'>What's the difference between a start and a leader? Have your say and see what the world really thinks.</p>
                <p className='manifesto-subtitle'>#starvsleader</p>
                <div className='manifesto-logo'>
                    <div className='manifesto-logo-text'>Powered by</div>
                    <Logo />
                </div>
            </div>
        </div>
    )

}

export default Manifesto