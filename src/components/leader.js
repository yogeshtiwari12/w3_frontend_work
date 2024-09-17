import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from './images/code1.avif';
import img2 from './images/code4.jpg'; 
import img3 from './images/football.jpg';
import img4 from './images/mahabharat.jpg';
const Leaderboard = () => {
  return (
    <div className="p-4 rounded-lg my-4">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showIndicators={true}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="First Slide" className="object-cover w-full h-40 md:h-72 rounded-xl" />
        </div>
        <div>
          <img src={img2} alt="Second Slide" className="object-cover w-full h-40 md:h-72 rounded-xl" />
        </div>
        <div>
          <img src={img3} alt="Third Slide" className="object-cover w-full h-40 md:h-72 rounded-xl" />
        </div>
        <div>
          <img src={img4} alt="Fourth Slide" className="object-cover w-full h-40 md:h-72 rounded-xl" />
        </div>
      </Carousel>
    </div>
  );
};
export default Leaderboard;
