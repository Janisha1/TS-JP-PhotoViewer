import './PhotoViewer.css';

interface PhotoViewerProps {
  imageUrl?: string;
}

export function PhotoViewer({imageUrl}: PhotoViewerProps) {
  return (
    <div>
      <img className="main-image" src={imageUrl} alt="Image from Lorem Picsum" />
    </div>
  )
}