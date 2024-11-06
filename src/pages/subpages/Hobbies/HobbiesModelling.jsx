import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesModellingImagesImport.jsx";
import { HobbyCard } from "../../../components/Card/HobbyCard.jsx";

export const HobbiesModelling = () => {
  const content = (
    <>
      <StyledModellingHeader>Modelling</StyledModellingHeader>
      <StyledModellingParagraph>
        Modeling is another passion of mine—it’s a creative outlet that lets me
        explore style and expression beyond the gym. I love the energy of being
        in front of the camera and bringing concepts to life through different
        poses, looks, and vibes. I enjoy the challenge of adapting to different
        themes and collaborating with photographers to capture the 'perfect'
        shot.
      </StyledModellingParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledModellingHeader = styled.h4`
  margin: 0;
`;

const StyledModellingParagraph = styled.p``;
