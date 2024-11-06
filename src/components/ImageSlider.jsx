import { useState } from "react";
import styled from "styled-components";

export const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <StyledSlideshowContainer>
      <StyledImgContainer>
        <StyledImg
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          key={currentIndex}
        />
      </StyledImgContainer>
      <StyledControlsContainer>
        <StyledButtonContainer>
          <StyledSlideshowNavigationButton onClick={goToPrevious}>
            &lt;
          </StyledSlideshowNavigationButton>
          <StyledSlideshowNavigationButton onClick={goToNext}>
            &gt;
          </StyledSlideshowNavigationButton>
        </StyledButtonContainer>
        {/* <StyledDotContainer>
          {images.map((_, index) => (
            <StyledDot key={index} active={index === currentIndex} />
          ))}
        </StyledDotContainer> */}
      </StyledControlsContainer>
    </StyledSlideshowContainer>
  );
};

const StyledSlideshowContainer = styled.div`
  display: flex;
  background-color: var(--card-background);
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImgContainer = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover; /* Preserves aspect ratio of the image */
  object-position: middle;
  transform-origin: top;

  transition: opacity 0.4s ease-in-out; /* Smooth transition for each image */
  opacity: 0;
  animation: fadeIn 0.4s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledControlsContainer = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
`;

const StyledSlideshowNavigationButton = styled.button`
  background-color: var(--primary-color);
  color: #fff; /* Ensures good contrast */
  border: none;
  border-radius: 50%;
  width: 40px; /* Increase size for visibility */
  height: 40px;
  font-size: 20px; /* Larger icon */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */

  &:hover {
    background-color: var(--secondary-color);
    transform: scale(1.1); /* Slightly enlarge on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
  }
`;

// const StyledDot = styled.span`
//   height: 8px;
//   width: 8px;
//   background-color: ${(props) =>
//     props.active ? "var(--primary-color)" : "var(--secondary-color)"};
//   border-radius: 50%;
//   display: inline-block;
//   margin: 0 4px;
//   transition: background-color 0.3s ease;
// `;

// const StyledDotContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;
