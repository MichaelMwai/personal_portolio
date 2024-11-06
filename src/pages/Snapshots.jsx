import styled from "styled-components";
import { HobbiesModelling } from "./subpages/Hobbies/HobbiesModelling";
import { HobbiesHiking } from "./subpages/Hobbies/HobbiesHiking";
import { HobbiesArt } from "./subpages/Hobbies/HobbiesArt";
import { HobbiesFitness } from "./subpages/Hobbies/HobbiesFitness";

const hobbies = [
  { name: "Fitness", Component: HobbiesFitness },
  { name: "Modelling", Component: HobbiesModelling },
  { name: "Art", Component: HobbiesArt },
  { name: "Hiking", Component: HobbiesHiking },
];

export const Snapshots = () => {
  return (
    <>
      <StyledAboutPage>
        <PageHeader>When I wasn't Coding</PageHeader>
        <HobbiesGrid>
          {hobbies.map(({ name, Component }) => (
            <Component key={name} />
          ))}
        </HobbiesGrid>
      </StyledAboutPage>
    </>
  );
};

const StyledAboutPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
`;

// When i wasn't coding
const PageHeader = styled.h1`
  text-align: center;
  color: var(--primary-color);
  margin-bottom: rem;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  text-align: justify;

  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, minmax(auto, 550px));
  }
`;
