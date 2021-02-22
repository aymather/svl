import React, { useState } from 'react';

const ProfileContext = React.createContext([{}, () => {}]);

const ProfileProvider = props => {
    const [state, setState] = useState({
        profiles: [],
        totals: [],
        votedWith: {
            star: 0,
            leader: 0,
            noone: 0
        }
    });

    return (
        <ProfileContext.Provider value={[state, setState]}>
            {props.children}
        </ProfileContext.Provider>
    );
};

export { ProfileProvider, ProfileContext };