// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ImageSelector from './PhotoViewer/ImageSelector';

import { PhotoViewer } from "./PhotoViewer/PhotoViewer";

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer imageUrl={'https://picsum.photos/id/237/600/400'}/>
      <ImageSelector />
    </div>
  )
}

export default App
