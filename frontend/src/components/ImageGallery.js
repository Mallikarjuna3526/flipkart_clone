import { useState } from "react";
import "../styles/ImageGallery.css";

export default function ImageGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="gallery">
      <div className="thumbnail-list">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            onClick={() => setSelected(img)}
            onError={(e) => e.target.src = "/placeholder.png"}
          />
        ))}
      </div>

      <div className="main-image">
        <img
          src={selected}
          alt="product"
          onError={(e) => e.target.src = "/placeholder.png"}
        />
      </div>
    </div>
  );
}
