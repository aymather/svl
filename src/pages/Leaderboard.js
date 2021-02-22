import { useContext, useState, useEffect } from 'react'
import Template from '../components/Template'
import Title from '../components/Title'
import Button from '../components/Button'
import LeaderboardTitle from '../components/LeaderboardTitle'
import ButtonGroup from '../components/ButtonGroup'
import classnames from 'classnames'
import { ProfileContext } from '../utils/context/profileContext'
import useProfiles from '../utils/hooks/useProfiles'
import _ from 'lodash'
import ResultsTableX from '../components/ResultsTableX'
import ResultsTableRow from '../components/ResultsTableRow'
import ResultsTableTitle from '../components/ResultsTableTitle'

const Leaderboard = () => {

    const [tab, setTab] = useState('star')
    const [profileState] = useContext(ProfileContext)
    const { loadLeaderboard } = useProfiles()

    useEffect(() => {

        loadLeaderboard()

    }, [])

    const share = () => {
        console.log(tab)
    }

    const renderLeaderboard = () => {
        if(profileState.totals) {
            const sorted = _.orderBy(profileState.totals, [tab], ['desc'])
            return (
                <div className='leaderboard-list'>
                    {
                        sorted.map((p, idx) => {
                            return (
                                <div className='leaderboard-list-item' key={p.profile_id}>
                                    <div className='leaderboard-list-item-left'>
                                        <p className='leaderboard-list-item-left-index'>{ idx + 1 }</p>
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

    const renderMe = () => {
        return (
            <ResultsTableX footer className='results-table-custom-desktop'>
                <ResultsTableTitle>YOU'VE VOTED WITH</ResultsTableTitle>
                <ResultsTableRow
                    leftText={profileState.votedWith.star + '%'}
                    rightText='of all users who voted stars'
                    leftColor='#FFFF00'
                    rightColor='#FFF'
                />
                <ResultsTableRow
                    leftText={profileState.votedWith.leader + '%'}
                    rightText='of all users who voted leaders'
                    leftColor='#939393'
                    rightColor='#FFF'
                />
                <ResultsTableRow
                    leftText={profileState.votedWith.noone + '%'}
                    rightText='of all users who voted no one'
                    leftColor='#FFFF00'
                    rightColor='#FFF'
                />
            </ResultsTableX>
        )
    }

    const renderTitle = () => {
        switch(tab) {
            case 'star':
                return <LeaderboardTitle text='Who the world thinks is a Star...' />
            case 'leader':
                return <LeaderboardTitle text='Who the world thinks is a Leader...' />
            case 'me':
                return <LeaderboardTitle text="You've voted with..." />
        }
    }

    const render = () => {
        switch(tab) {
            case 'star':
                return renderLeaderboard()
            case 'leader':
                return renderLeaderboard()
            case 'me':
                return renderMe()
        }
    }

    return (
        <Template>
            <Title />
            <div className='leaderboard'>
                <div className='leaderboard-header'>
                    <div className={classnames('leaderboard-header-category', { 'highlight-text': tab === 'star'})} onClick={() => setTab('star')}>
                        <h1>STARS</h1>
                    </div>
                    <div className={classnames('leaderboard-header-category', { 'highlight-text': tab === 'leader'})} onClick={() => setTab('leader')}>
                        <h1>LEADERS</h1>
                    </div>
                    <div className={classnames('leaderboard-header-category', { 'highlight-text': tab === 'me'})} onClick={() => setTab('me')}>
                        <h1>ME</h1>
                    </div>
                </div>
                { render() }
            </div>
            { renderTitle() }
            <ButtonGroup className='desktop-left-button-group desktop-height-1-3'>
                <Button click={share}>SHARE</Button>
            </ButtonGroup>
        </Template>
    )

}

export default Leaderboard