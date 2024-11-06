import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesFitnessImagesImport.jsx";
import { HobbyCard } from "../../../components/Card/HobbyCard.jsx";

export const HobbiesFitness = () => {
  const content = (
    <>
      <StyledFitnessHeader>Fitness</StyledFitnessHeader>
      <StyledFitnessParagraph>
        I love staying fit and active—workouts aren’t just a hobby, they’re a
        way of life. As a personal trainer, I’m dedicated to not only pushing
        myself but also helping others reach their fitness goals. Strength
        training, conditioning, and functional workouts are my go-tos, and I’m
        always excited to dive into new fitness challenges. While balancing
        training others and improving my own fitness can be tough, I’m always
        ready to jump into a solid workout session or help someone break through
        their personal best.
      </StyledFitnessParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledFitnessHeader = styled.h4`
  margin: 0;
`;

const StyledFitnessParagraph = styled.p``;
