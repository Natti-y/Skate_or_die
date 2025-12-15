import '../../css/index.css';
import VideoPlayer from '../../shared/components/VideoPlayer';

const Landing = () => {
  return (
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
  );
};

export default Landing;
