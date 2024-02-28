import { useState } from "react";
import { imageUrls } from "./PhotoGallery";
import './ImageSelector.css';

// interface ImageSelectorProps {
//   setImageUrl: (imageUrl: string) => void;
// }

function ImageSelector() {
  const [imgSrc, setImgSrc] = useState('Choose an Image');

  const handleClick = (imgSrc:string) => {
    setImgSrc(imgSrc);
  };


  if(imageUrls) {
    return (
      <div>
        <p>{'message is: ' + imgSrc}</p>
        {/* {imageUrls.map((imageUrl) => <img className="image-thumbnail" onClick={handleClick} src={imageUrl} alt="Image Thumbnail"  />)} */}
        {imageUrls.map((imageUrl) => <img className="image-thumbnail" onClick={() => handleClick(imageUrl)} src={imageUrl} alt="Image Thumbnail"  />)}
      </div>
    )
  }

}

export default ImageSelector;