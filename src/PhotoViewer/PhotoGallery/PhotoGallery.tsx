import ImageSelector from "../ImageSelector/ImageSelector";
import './PhotoGallery.css';

interface PhotoGalleryProps {
  urls: string[];
  selectImage: (urlIndex: number) => void;
}

function PhotoGallery(imgUrls:PhotoGalleryProps) {
  return (
    <div>
      {imgUrls.urls.map((url, i) => {
        return <ImageSelector key={i} index={i} url={url} selectImage={imgUrls.selectImage}/>})}
    </div>
  )
}

export default PhotoGallery;