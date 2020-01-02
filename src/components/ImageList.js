import React from 'react'; 
import ImageCard from './ImageCard';
import './ImageList.css'; 
//put self authored imports below 3rd party imports. 

const ImageList = (props) => {
    console.log(props.images);
const imageElements = props.images.map(image => {return <ImageCard key={image.id} image={image} />});
    console.log(imageElements);

    return (
        <div className="image-list">{imageElements}</div>
    )
}

export default ImageList;