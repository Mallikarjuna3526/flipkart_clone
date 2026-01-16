export default function ImageCarousel({ images }) {
  return (
    <div className="carousel">
      {images.map((img, index) => (
        <img key={index} src={img} alt="product" />
      ))}
    </div>
  );
}
