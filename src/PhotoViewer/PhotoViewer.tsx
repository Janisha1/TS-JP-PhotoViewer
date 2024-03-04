import { useState } from 'react';
import SelectedImage from './SelectedImage/SelectedImage';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import { imageUrls } from './utils/getImageUrls';
import './PhotoViewer.css';

export function PhotoViewer() {
  const [mainImageUrl, setMainImageUrl] = useState(0);
//  const [selectedImageUrl, setSelectedImageUrl] = ('');
  const selectedImageHandler = (clickedUrlIndex: number) => {
    setMainImageUrl(clickedUrlIndex);
}
  return (
    <div>
      <h1>React Photo Viewer</h1>
      {/* <SelectedImage imageUrl={'https://picsum.photos/id/237/600/400'}/> */}
      <SelectedImage urlIndex={mainImageUrl} />
      <hr></hr>
      <h3>Click on an image from the gallery below to see a larger version above:</h3>
      <PhotoGallery urls={imageUrls} selectImage={(clickedUrlIndex:number) => selectedImageHandler(clickedUrlIndex)}/>
    </div>
  )
}