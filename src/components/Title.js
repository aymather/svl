const Title = ({ textColor, dashboard }) => {
    return (
        <div className='title'>
            <div>
                <h1 style={{ color: textColor }}>STAR</h1>
                <p style={{ color: textColor }}>VS</p>
                <h1 style={{ color: textColor }}>LEADER</h1>
                { dashboard && <p style={{ color: textColor }}>DASHBOARD</p> }
            </div>
        </div>
    )
}

export default Title