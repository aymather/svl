const ImageStack = ({ image }) => {

    return (
        <div className='image-stack-wrap'>
            <img
                src={image}
                alt='Stack Image'
                className='image-stack-image'
            />
        </div>
    )

}

export default ImageStack