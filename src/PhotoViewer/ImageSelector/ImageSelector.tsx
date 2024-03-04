import './ImageSelector.css';

interface ImageSelectorProps {
  url: string,
  index: number,
  selectImage: (urlIndex: number) => void;
}

function ImageSelector(img: ImageSelectorProps) {
  return (
    <>
      <img className="img-thumbnail" src={img.url} alt="Selected thumbnail" onClick={() => img.selectImage(img.index)}/>
    </>
  )
}

export default ImageSelector;