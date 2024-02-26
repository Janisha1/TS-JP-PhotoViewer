import { imageUrls } from "./PhotoGallery";
import './ImageSelector.css';

function ImageSelector() {
  if(imageUrls) {
    return (
      <div>
        {imageUrls.map((imageUrl) => <img className="image-thumbnail" src={imageUrl} alt="Image Thumbnail"  />)}
      </div>
    )
  }

}

export default ImageSelector;