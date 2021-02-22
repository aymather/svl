import { Fragment, useContext, useEffect } from 'react'
import { Home, Leaderboard } from './pages'
import { AuthContext } from './utils/context/authContext'
import { MusicContext } from './utils/context/musicContext'
import useAuth from './utils/hooks/useAuth'
import useProfiles from './utils/hooks/useProfiles'
import Instructions from './components/Instructions'
import ReactPlayer from 'react-player'
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import Prompt from './components/Prompt'
import ButtonGroup from './components/ButtonGroup'
import Button from './components/Button'
import Dashboard from './pages/Dashboard'

const App = () => {

	const [authState] = useContext(AuthContext)
	const [musicState] = useContext(MusicContext)
	const { loadUser } = useAuth()
	const { loadProfiles } = useProfiles()
	const audio_url = 'http://localhost:5052/audio/song.mp4'

	useEffect(() => {

		loadUser()
		loadProfiles()

	}, [])

	const render = () => {
		console.log(authState)
		if(authState.isLoggedIn) {
			return (
				<Fragment>
					<ReactPlayer
						url={audio_url}
						className='audio-player'
						playing={musicState.isPlaying}
						loop
					/>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/leaderboard'>
							<Leaderboard />
						</Route>
						<Route exact path='/instructions'>
							<Instructions />
						</Route>
						<Route exact path='/the-dopest-dashboard'>
							<Dashboard />
						</Route>
						<Route exact path='/prompt'>
							<Prompt text='Curious to see where everyone ranks?'>
								<ButtonGroup borderColor='#000'>
									<Button textColor='#000'>Yes</Button>
									<Button borderColor='#000' textColor='#000'>No</Button>
								</ButtonGroup>
							</Prompt>
						</Route>
					</Switch>
				</Fragment>
			)
		} else {
			return (
				null
			)
		}
	}

	return render()

}

export default App;
