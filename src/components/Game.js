import { Fragment, useContext, useState } from 'react'
import Template from '../components/Template'
import Title from '../components/Title'
import Image from '../components/Image'
import Info from '../components/Info'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import { ProfileContext } from '../utils/context/profileContext'
import { useProfiles } from '../utils/hooks'
import { ApiClient } from '../etc'
import Music from './Music'

const Game = () => {

    const [controls, setControls] = useState(0)
    const [table, setTable] = useState(null)
    const [count, setCount] = useState(0)
    const [profileState] = useContext(ProfileContext)
    const { nextProfile } = useProfiles()
    
    const vote = async vote => {

        try {

            const profile_id = profileState.profiles[0].id
            const api = new ApiClient()
            await api.vote(profile_id, vote)
            const stats = await api.profileStats(profile_id)

            setCount(count + 1)
            setControls(1)
            setTable({
                type: vote,
                star: stats.star,
                leader: stats.leader,
                noone: stats.noone
            })

        } catch (err) {
            throw new Error(err)
        }

    }

    const yes = () => {
        console.log('Yes')
    }

    const no = () => {
        console.log('No')
    }

    const next = () => {
        setControls(0)
        setTable(null)
        nextProfile()
    }

    const share = () => {
        console.log('Sharing...')
    }

    const renderControls = () => {
        if(controls === 0) {
            return (
                <Fragment>
                    <Button click={vote} input='star'>STAR</Button>
                    <Button click={vote} input='noone' className='text-muted'>NO ONE</Button>
                    <Button click={vote} input='leader'>LEADER</Button>
                </Fragment>
            )
        } else if (controls === 1) {
            return (
                <Fragment>
                    <Button click={share} className='desktop-height-2-3'>SHARE</Button>
                    <Button click={next} className='desktop-height-1-3'>NEXT</Button>
                </Fragment>
            )
        } else if (controls === 2) {
            return (
                <Fragment>
                    <Button click={yes}>YES</Button>
                    <Button click={no}>NO</Button>
                </Fragment>
            )
        }
    }

    const render = () => {
        if(count >= 6) {
            setTable(null)
            setCount(0)
            setControls(2)
            return (
                <Fragment>
                    <Title />
                    <ButtonGroup>
                        { renderControls() }
                    </ButtonGroup>
                    <Info
                        name='Curious to see where everyone ranks?'
                        table={null}
                    />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Title />
                    <ButtonGroup>
                        { renderControls() }
                    </ButtonGroup>
                    <Info
                        name={ profileState.profiles.length > 0 ? profileState.profiles[0].name : '' }
                        table={table}
                    />
                </Fragment>
            )
        }
    }

    return (
        <Fragment>
            <Template>
                <Music color='#FFFF00' />
                { render() }
            </Template>
            <Image img={ profileState.profiles.length > 0 ? profileState.profiles[0].image : '' } />
        </Fragment>
    )

}

export default Game