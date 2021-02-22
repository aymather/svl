import React, { useState } from 'react';

const MusicContext = React.createContext([{}, () => {}]);

const MusicProvider = props => {
    const [state, setState] = useState({
        isPlaying: false
    });

    return (
        <MusicContext.Provider value={[state, setState]}>
            {props.children}
        </MusicContext.Provider>
    );
};

export { MusicProvider, MusicContext };