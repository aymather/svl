import React, { useState } from 'react';

const AuthContext = React.createContext([{}, () => {}]);

const AuthProvider = props => {
    const [state, setState] = useState({
        isLoggedIn: false,
        isNewUser: false,
        token: ''
    });

    return (
        <AuthContext.Provider value={[state, setState]}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };