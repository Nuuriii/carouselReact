import { ImageSlider } from "./Components/ImageSlider";
import "./App.css";

export const App: React.FC = () => {
   const images = [
      "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg",
      "https://i.pinimg.com/736x/2d/70/1f/2d701f60a5697686370cb3a81ea5ca52.jpg",
      "https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png",
   ];

   return (
      <div className='app'>
         <h1>Image Slider</h1>
         <ImageSlider images={images} />
      </div>
   );
};
