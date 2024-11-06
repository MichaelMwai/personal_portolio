import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesHikingImagesImport.jsx";
import { HobbyCard } from "../../../components/Card/HobbyCard.jsx";

export const HobbiesHiking = () => {
  const content = (
    <>
      <StyledHikingHeader>Hiking</StyledHikingHeader>
      <StyledHikingParagraph>
        Hiking is my way of reconnecting with nature and recharging. There's
        nothing like hitting a trail, getting lost in the scenery, and tackling
        new terrains. Whether it’s a challenging mountain climb or a peaceful
        forest walk, hiking gives me a sense of freedom and a break from the
        daily grind. Each trail brings a fresh perspective, a new challenge, and
        a reminder of the importance of perseverance and patience—both on and
        off the trail.
      </StyledHikingParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledHikingHeader = styled.h4`
  margin: 0;
`;

const StyledHikingParagraph = styled.p``;
