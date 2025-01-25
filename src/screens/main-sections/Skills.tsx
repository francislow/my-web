import styled from "styled-components";
import Lottie from "lottie-react";
import toolsAnimation from "../../configs/lottie/tools.json";
import colors from "../../configs/colors";
import SkillLink from "../../components/SkillLink";

const Reveal = require("react-reveal");

function Skills() {
  return (
    <Container>
      <Reveal.Slide bottom>
        <Title>
          <Lottie style={{ width: "60px" }} animationData={toolsAnimation} />
          <h1>My bread and butter</h1>
        </Title>
        <Wrapper>
          <SkillLink title="HTML5" imageUrl="/images/skills/html.svg" />
          <SkillLink title="CSS3" imageUrl="/images/skills/css.svg" />
          <SkillLink title="JavaScript" imageUrl="/images/skills/javascript.svg" />
          <SkillLink title="ReactJS" imageUrl="/images/skills/react.svg" href="https://reactjs.org/" />
          <SkillLink title="VueJS" imageUrl="/images/skills/vue.svg" href="https://vuejs.org/" />
          <SkillLink title="NestJs" imageUrl="/images/skills/nest.svg" href="https://docs.nestjs.com/" />
          <SkillLink title="React Native" imageUrl="/images/skills/reactnative.png" href="https://reactnative.dev/" />
          <SkillLink title="NativeScript Vue" imageUrl="/images/skills/nativescript_vue.png" href="https://nativescript-vue.org/" />
          <SkillLink title="ExpressJS" imageUrl="/images/skills/express.png" href="https://expressjs.com/" />
          <SkillLink title="PostgreSQL" imageUrl="/images/skills/postgres.svg" href="https://www.postgresql.org/" />
          <SkillLink title="MongoDB" imageUrl="/images/skills/mongodb.png" href="https://www.mongodb.com/" />
          <SkillLink title="Firebase Services" imageUrl="/images/skills/firebase.svg" href="https://firebase.google.com/" />
          <SkillLink title="AWS" imageUrl="/images/skills/aws.svg" href="https://aws.amazon.com/" />
          <SkillLink title="Docker" imageUrl="/images/skills/docker.svg" href="https://www.docker.com/" />
        </Wrapper>
      </Reveal.Slide>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.bg_color};
  padding: 0 10% 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 25px;
    color: white;
    font-weight: 400;
    margin-left: 7px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: -12px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 65px;
  grid-template-columns: repeat(10, minmax(0, 1fr));

  @media (max-width: 1880px) {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  @media (max-width: 1480px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (max-width: 880px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default Skills;
