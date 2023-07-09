import { ImageSlider } from "./Components/ImageSlider";
import "./App.css";

export const App: React.FC = () => {
   const images = [
      "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg",
      "https://i.pinimg.com/736x/2d/70/1f/2d701f60a5697686370cb3a81ea5ca52.jpg",
      "https://i.pinimg.com/474x/09/65/b9/0965b93f250920c1ee8a9a2b0ba0c291.jpg",
   ];

   return (
      <div className='app'>
         <h1>Image Slider</h1>
         <ImageSlider images={images} />
      </div>
   );
};
