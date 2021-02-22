import axios from 'axios'

export default class ApiClient {

    constructor() {
        this.urls = {
            base: 'http://localhost:5052',
            auth: {
                login: '/login'
            },
            profiles: {
                base: '/profile',
                stats: '/profile/stats',
                totals: '/profile/totals',
                votedWith: '/profile/voted-with'
            },
            voting: {
                base: '/vote'
            }
        }
    }

    login = async token => {

        try {
            
            const url = this.urls.base + this.urls.auth.login
            const { data } = await axios.post(url, { token })
            return data

        } catch (err) {
            throw new Error(err)
        }

    }

    profiles = async () => {

        try {

            const url = this.urls.base + this.urls.profiles.base
            const { data } = await axios.get(url)
            return data

        } catch (err) {
            throw new Error(err)
        }

    }

    vote = async (profile_id, vote) => {

        try {

            const url = this.urls.base + this.urls.voting.base
            const token = window.localStorage.getItem('token')
            const { data } = await axios.post(url, { profile_id, vote }, { headers: { 'x-auth-token': token }})
            return data

        } catch (err) {
            throw new Error(err)
        }

    }

    profileStats = async profile_id => {

        try {

            const url = this.urls.base + this.urls.profiles.stats
            const { data } = await axios.get(url, { params: { profile_id } })
            return data

        } catch (err) {
            throw new Error(err)
        }

    }

    profileTotals = async () => {

        try {

            const url = this.urls.base + this.urls.profiles.totals
            const { data } = await axios.get(url)
            return data

        } catch (err) {
            throw new Error(err)
        }

    }

    votedWith = async user_id => {

        try {
            
            const url = this.urls.base + this.urls.profiles.votedWith
            const token = window.localStorage.getItem('token')
            const { data } = await axios.get(url, { params: { user_id }, headers: { 'x-auth-token': token } })
            return data

        } catch (err) {
            throw new Error(err)
        }

    }

}