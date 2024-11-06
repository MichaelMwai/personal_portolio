import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesArtImagesImport.jsx";
import { HobbyCard } from "../../../components/Card/HobbyCard.jsx";

export const HobbiesArt = () => {
  const content = (
    <>
      <StyledArtHeader>Art</StyledArtHeader>
      <StyledArtParagraph>
        Art and drawing are my creative outlets, where I can let ideas flow
        freely. Whether it’s sketching with a pencil, experimenting with digital
        illustrations, or trying out new styles, drawing helps me express ideas
        and emotions in a way words can’t. I love the process of bringing a
        blank page to life, one line at a time, and seeing how each piece
        evolves. It’s both relaxing and rewarding, and it keeps my creativity
        sharp for everything else I do.
      </StyledArtParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledArtHeader = styled.h4`
  margin: 0;
`;

const StyledArtParagraph = styled.p``;
