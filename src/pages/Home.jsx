import styled from "styled-components";
import profileAvatar from "../assets/profile-avatar.jpg";
import { AnimatedIntro } from "../components/AnimatedIntro";
import { ProjectShowcase } from "../components/Projects/ProjectShowcase";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "Adobe Illustrator",
    "Adobe Premier Pro",
    "Adobe Photoshop",
    "Figma",
  ];

  // const scrollToFooter = () => {
  //   const footer = document.querySelector("footer");
  //   if (footer) {
  //     footer.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <StyledHomeContainer>
      <StyledHomeSectionOne>
        <StyledHomeBlurb>
          <AnimatedIntro />
        </StyledHomeBlurb>
        <StyledProfileImgContainer>
          <StyledProfileImg src={profileAvatar} alt="Mike the Developer" />
        </StyledProfileImgContainer>
      </StyledHomeSectionOne>

      <StyledSection>
        <h2>About Me</h2>
        <p>
          I'm Michael, a self-taught <b>Front-End Developer</b> and{" "}
          <b>Fitness Fanatic</b>. I thrive on the thrill of learning new skills,
          whether it’s mastering React or transforming a pencil sketch into a
          sleek design. When I’m not crafting user-friendly interfaces, you can
          find me at a marathon or hiking, often resulting in unexpected
          adventures. I’m enjoying this journey of creativity and code and would
          love to create something amazing together!
        </p>
      </StyledSection>

      <SkillsSection skills={skills} />

      <ProjectShowcase limit={3} useHomepageStyle={true} />
    </StyledHomeContainer>
  );
};

const StyledHomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const StyledHomeSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 2px solid var(--primary-color);
  background-color: var(--card-background);
  border-radius: 8px;
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledHomeBlurb = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
    width: 60%;
    margin-bottom: 0;
  }
`;

const StyledProfileImgContainer = styled.div`
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 35%;
  }
`;

const StyledProfileImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
`;

const StyledSection = styled.section`
  margin-bottom: 2rem;
`;

// const StyledButton = styled.button`
//   display: inline-block;
//   padding: 0.5rem 1rem;
//   background-color: var(--primary-color);
//   color: var(--text-color);
//   text-decoration: none;
//   border-radius: 4px;
//   border: none;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: var(--secondary-color);
//   }
// `;
