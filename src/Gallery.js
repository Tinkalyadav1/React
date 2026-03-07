import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery">

      <h2 className="gallery-title">Our Projects</h2>

      <div className="gallery-grid">

        <img src="https://images.unsplash.com/photo-1618220179428-22790b461013" alt="design"/>
        <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea" alt="design"/>
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="design"/>
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" alt="design"/>
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="design"/>
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="design"/>

      </div>

    </section>
  );
}

export default Gallery;