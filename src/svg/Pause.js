const Pause = ({ color, onClick }) => {
    return (
        <svg
            width={31}
            height={31}
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='music-btn'
            onClick={onClick}
        >
            <circle cx={15.5} cy={15.5} r={15} stroke={color ? color : "#FF0"} />
            <rect
                x={11.873}
                y={10.554}
                width={2.073}
                height={10.365}
                rx={1.036}
                fill={color ? color : "#FF0"}
            />
            <rect
                x={17.055}
                y={10.553}
                width={2.073}
                height={10.365}
                rx={1.036}
                fill={color ? color : "#FF0"}
            />
        </svg>
    )
}

export default Pause