import { useState } from "react";

interface ImageSliderProps {
   images: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const goToPreviousSlide = () => {
      setCurrentSlide((prevSlide) =>
         prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
   };

   const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
   };

   return (
      <div className='slider'>
         <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
         <button onClick={goToPreviousSlide}>Previous</button>
         <button onClick={goToNextSlide}>Next</button>
      </div>
   );
};
