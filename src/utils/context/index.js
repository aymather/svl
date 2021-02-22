import { AuthProvider } from './authContext'
import { ProfileProvider } from './profileContext'
import { MusicProvider } from './musicContext'

const RootProvider = ({ children }) => {
    return (
        <AuthProvider>
            <ProfileProvider>
                <MusicProvider>
                    { children }
                </MusicProvider>
            </ProfileProvider>
        </AuthProvider>
    )
}

export default RootProvider