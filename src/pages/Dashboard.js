import { useState, Fragment } from 'react'
import Template from "../components/Template"
import Title from "../components/Title"
import Image from '../components/Image'
import Info from '../components/Info'
import ButtonGroup from '../components/ButtonGroup'
import Button from '../components/Button'
import SortProfiles from '../components/SortProfiles'

const Dashboard = () => {

    const [page, setPage] = useState('home')

    const log = () => {
        console.log('Works')
    }

    const render = () => {
        switch(page) {
            case 'home':
                return (
                    <Fragment>
                        <Template>
                            <Title dashboard />
                            <Info name='No One' />
                            <ButtonGroup>
                                <Button click={() => setPage('sort')}>Sort Profiles</Button>
                                <Button click={log}>Upload Profile</Button>
                            </ButtonGroup>
                        </Template>
                        <Image img='http://localhost:5052/images/kenna.jpeg' />
                    </Fragment>
                )
            case 'sort':
                return (
                    <SortProfiles />
                )
            default:
                return null
        }
    }

    return render()
}

export default Dashboard