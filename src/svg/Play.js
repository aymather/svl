const Play = ({ color, onClick }) => {
    return (
        <svg
            width={31}
            height={32}
            viewBox="0 0 31 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='music-btn'
            onClick={onClick}
        >
            <circle cx={15.5} cy={15.525} r={15} stroke={color ? color : "#FF0"} />
            <path
                d="M18.888 12.95v4.568a1.792 1.792 0 00-2.172.287 1.809 1.809 0 00.584 2.947 1.792 1.792 0 002.116-.57c.24-.315.371-.702.371-1.1V9.984a.726.726 0 00-.623-.717.717.717 0 00-.34.036l-5.756 2.065a.72.72 0 00-.476.68v6.374a1.792 1.792 0 00-2.171.287 1.81 1.81 0 00.583 2.946 1.792 1.792 0 002.115-.569c.241-.315.372-.701.372-1.099v-5.1l5.397-1.935v-.001z"
                fill={color ? color : "#FF0"}
            />
        </svg>
    )
}

export default Play