import React, { useState } from 'react'
import styled from 'styled-components';

interface ImageSliderProps {
  images: string[];
}

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgInnerDiv = styled



const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const visibleImages = images.slice(currentIndex, currentIndex + 5);
  if(visibleImages.length < 5) {
    visibleImages.push(...images.slice(0, 5 - visibleImages.length));
  }

  

  return (
    <ImgDiv>
    
    </ImgDiv>
  )
}

export default ImageSlider