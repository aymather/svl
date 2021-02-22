import { useContext, useEffect, useState } from 'react'
import classnames from 'classnames'
import Template from "./Template"
import Title from "./Title"
import { useProfiles } from '../utils/hooks'
import { ProfileContext } from '../utils/context/profileContext'

const SortProfiles = () => {

    const [tab, setTab] = useState('profiles')
    const [profileOrder, setProfileOrder] = useState({})
    const [queue] = useState([])
    const [queueIndex, setQueueIndex] = useState(1)
    const [profileState, setProfileState] = useContext(ProfileContext)
    const { loadProfiles } = useProfiles()

    useEffect(() => {

        loadProfiles()
            .then(() => {
                const profiles = [...profileState.profiles]
                var profileOrder = {}
                for(let profile of profiles) {
                    profileOrder[profile.id] = 0
                }
                setProfileOrder(profileOrder)
            })

    }, [])

    const renderProfiles = () => {
        const list = tab === 'profiles' ? profileState.profiles : queue
        if(list) {
            console.log(list)
            return (
                <div className='leaderboard-list'>
                    {
                        list.map((p, idx) => {
                            return (
                                <div className='leaderboard-list-item' key={idx} onClick={() => queueUp(p.id)}>
                                    <div className='leaderboard-list-item-left'>
                                        <p className='leaderboard-list-item-left-index'>{ profileOrder[p.id] }</p>
                                        <p className='leaderboard-list-item-left-name'>{ p.name }</p>
                                    </div>
                                    <div className='leaderboard-list-item-right'>
                                        <img src={p.image} alt='profile' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    const renderQueue = () => {
        // var queue = []
        // for(let [id, ])
    }

    const queueUp = id => {
        if(profileOrder[id] === 0) {
            var po = {...profileOrder}
            po[id] = queueIndex
            setProfileOrder(po)
            setQueueIndex(queueIndex + 1)
        }
    }

    return (
        <Template>
            <Title dashboard />
            <div className='leaderboard' onClick={() => console.log(profileState)}>
                <div className='leaderboard-header'>
                    <div className={classnames('leaderboard-header-category', { 'highlight-text': tab === 'profiles'})} onClick={() => setTab('profiles')}>
                        <h1>Profiles</h1>
                    </div>
                    <div className={classnames('leaderboard-header-category', { 'highlight-text': tab === 'queue'})} onClick={() => setTab('queue')}>
                        <h1>Queue</h1>
                    </div>
                </div>
                { renderProfiles() }
            </div>
        </Template>
    )
}

export default SortProfiles