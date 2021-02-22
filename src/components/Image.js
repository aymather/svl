const Image = ({ img }) => {
    return (
        <div className='image'>
            <img
                src={img}
                alt='Celebrity Photo'
            />
            <div className='image-gradient'></div>
        </div>
    )
}

export default Image