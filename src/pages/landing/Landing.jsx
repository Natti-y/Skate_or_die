import '../../css/index.css';
import VideoPlayer from '../../shared/components/VideoPlayer';

const Landing = () => {
  return (
    <>
    <section className="landing landing-flex">
      
      <div className="landing-left">
        <h1 className="landing-h1">
          <span className="h1-line1">SKATE</span>
          <span className="h1-line2">OR DIE</span>
        </h1>

        <h2 className="landing-h2">No excuses. No brakes.</h2>
      </div>

      <div className="landing-right">
        <VideoPlayer />
      </div>

    </section>


    <section className="new-products">
      <h2 className="new-products-title">New Drops</h2>

      <div className="products-grid">
        <div className="product-card">
          <h3>T-shirt</h3>
          <img src="src/assets/newDrops/skateordie-tshirt.jpg" alt="T-shirt" />
        </div>

        <div className="product-card">
          <h3>Hoodie</h3>
          <img src="src/assets/newDrops/skateordiehoodie.webp" alt="Hoodie" />
        </div>

        <div className="product-card">
          <h3>Shoes</h3>
          <img src="src/assets/newDrops/skateordieshoes.jpg" alt="Shoes" />
        </div>
      </div>
    </section>
    </>
  );
};

export default Landing;
