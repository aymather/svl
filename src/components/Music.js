import { useContext } from 'react'
import { Play, Pause } from '../svg'
import { MusicContext } from '../utils/context/musicContext'
import { useMusic } from '../utils/hooks'

const Music = ({ color }) => {

    const [musicState] = useContext(MusicContext)
    const { toggle } = useMusic()

    return (
        <div className='music'>
            {
                musicState.isPlaying ?
                <Pause color={color} onClick={toggle} /> :
                <Play color={color} onClick={toggle} />
            }
        </div>
    )
}

export default Music