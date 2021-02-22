import { useContext } from 'react'
import { MusicContext } from '../context/musicContext'

const useMusic = () => {

    const [musicState, setMusicState] = useContext(MusicContext)

    const toggle = () => {
        setMusicState({ ...musicState, isPlaying: !musicState.isPlaying })
    }

    return {
        toggle
    }

}

export default useMusic