import { useContext } from 'react'
import { ProfileContext } from '../context/profileContext'
import { ApiClient } from '../../etc'

const useProfiles = () => {

    const [profileState, setProfileState] = useContext(ProfileContext)

    const api = new ApiClient()

    const loadProfiles = async () => {

        try {

            const profiles = await api.profiles()
            setProfileState({ ...profileState, profiles })

        } catch (err) {
            throw new Error(err)
        }

    }

    const nextProfile = () => {
        const profiles = [...profileState.profiles] // copy
        profiles.shift() // remove first item
        setProfileState({ ...profileState, profiles })
    }

    const loadLeaderboard = async () => {

        try {

            const [totals, votedWith] = await Promise.all([
                api.profileTotals(),
                api.votedWith()
            ])
            setProfileState({ ...profileState, totals, votedWith })

        } catch (err) {
            throw new Error(err)
        }

    }

    const loadProfileTotals = async () => {

        try {
            const totals = await api.profileTotals()
            setProfileState({ ...profileState, totals })
        } catch (err) {
            console.log(err)
        }

    }

    const loadVotedWith = async () => {
        try {
            const votedWith = await api.votedWith()
            setProfileState({ ...profileState, votedWith })
        } catch (err) {
            throw new Error(err)
        }
    }

    return {
        loadProfiles,
        nextProfile,
        loadProfileTotals,
        loadVotedWith,
        loadLeaderboard
    }

}

export default useProfiles