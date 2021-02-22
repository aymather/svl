const LeaderboardTitle = ({ text }) => {
    return (
        <div className='leaderboard-title desktop-height-2-3'>
            <h1>{ text }</h1>
            <footer className='results-table-footer'>Have an opinion? <span>#starvsleader</span></footer>
        </div>
    )
}

export default LeaderboardTitle