import React from 'react'; 

const ImageList = (props) => {
    console.log(props.images);
    const imageElements = props.images.map(image => {return <img src={image.urls.regular} alt="unsplash api image response"/>});
    console.log(imageElements);

    return (
        <div>{imageElements}</div>
    )
}

export default ImageList;