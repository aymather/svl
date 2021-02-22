import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { ApiClient } from '../../etc'
import { useHistory } from 'react-router-dom'

const useAuth = () => {

    const [authState, setAuthState] = useContext(AuthContext)
    const history = useHistory()
    const api = new ApiClient()

    const loadUser = async () => {

        try {

            const token = window.localStorage.getItem('token')
            const { token: new_token, is_new_user } = await api.login(token)
            window.localStorage.setItem('token', new_token)
            setAuthState({ ...authState, token: new_token, isLoggedIn: true, isNewUser: is_new_user })
            
            if(is_new_user) {
                history.push('/instructions')
            }

        } catch (err) {
            throw new Error(err)
        }

    }

    return {
        loadUser
    }

}

export default useAuth