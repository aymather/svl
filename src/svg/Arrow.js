const Arrow = props => {
    return (
        <svg
            width={15}
            height={31}
            viewBox="0 0 15 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8.077 0v28.941l6.058-5.648.865.715L7.5 31 0 24.008l.865-.715 6.058 5.648V0h1.154z"
                fill={props.color ? props.color : "#FF0"}
            />
        </svg>
    )
}

export default Arrow