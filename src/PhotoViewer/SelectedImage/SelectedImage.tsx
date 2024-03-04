import { imageUrls } from '../utils/getImageUrls';
import './SelectedImage.css';

interface SelectedImageProps {
  urlIndex: number
}

function SelectedImage(imgUrl: SelectedImageProps) {
  return (
    <div>
      <img className="main-image" src={imageUrls[imgUrl.urlIndex]} alt="Image from Lorem Picsum" />
    </div>
  )
}

export default SelectedImage;