import styled from "styled-components";
import Lottie from "lottie-react";
import toolsAnimation from "../../configs/lottie/tools.json";
import colors from "../../configs/colors";

function Skills() {
  return (
    <Container>
      <Title>
        <Lottie style={{ width: "60px" }} animationData={toolsAnimation} />
        <h1>My bread and butter</h1>
      </Title>
      <Wrapper>
        <Item>
          <img alt=""  src="/images/skills/html.svg"></img>
          <div>
            <p>HTML5</p>
          </div>
        </Item>
        <Item>
          <img alt=""  src="/images/skills/css.svg"></img>
          <div>
            <p>CSS3</p>
          </div>
        </Item>
        <Item>
          <img alt=""  src="/images/skills/javascript.svg"></img>
          <div>
            <p>JavaScript</p>
          </div>
        </Item>
        <Item href="https://reactjs.org/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src="/images/skills/react.svg"></img>
          <div>
            <p>ReactJS</p>
          </div>
        </Item>
        <Item href="https://vuejs.org/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src="/images/skills/vue.svg"></img>
          <div>
            <p>VueJS</p>
          </div>
        </Item>
        <Item href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src="/images/skills/reactnative.png"></img>
          <div>
            <p>React Native</p>
          </div>
        </Item>
        <Item href="https://nativescript-vue.org/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src="/images/skills/nativescript_vue.png"></img>
          <div>
            <p>NativeScript Vue</p>
          </div>
        </Item>
        <Item href="https://expressjs.com/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src='/images/skills/express.png'></img>
          <div>
            <p>ExpressJS</p>
          </div>
        </Item>
        <Item href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src='/images/skills/postgres.svg'></img>
          <div>
            <p>PostgreSQL</p>
          </div>
        </Item>
        <Item href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src='/images/skills/mongodb.png'></img>
          <div>
            <p>MongoDB</p>
          </div>
        </Item>
        <Item href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src="/images/skills/firebase.svg"></img>
          <div>
            <p>Firebase Services</p>
          </div>
        </Item>
        <Item href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer external">
          <img alt=""  src="/images/skills/aws.svg"></img>
          <div>
            <p>AWS</p>
          </div>
        </Item>
      </Wrapper>
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

const Item = styled.a`
  position: relative;
  padding-bottom: 100%; /* This sets the div to 16 : 9 aspect ratio */

  transition: all 250ms cubic-bezier(0.2, 0.5, 0.7, 0.4);

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 1;
    object-fit: cover;
    top: 0;
  }

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: rgba(10,10,10,0.9);

    opacity: 0;
    transition: all 140ms cubic-bezier(0.2, 0.5, 0.7, 0.4);

    p {
      color: transparent;
      font-weight: 600;
      text-align: center;
      display: inline;
      white-space: nowrap;

      font-size: 10px;
      transition: all 150ms cubic-bezier(0.2, 0.5, 0.7, 0.4) 0.14s;


    }

    &:hover {
      opacity: 1;
    }

    &:hover > p {
      color: white;
      font-size: 15px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

export default Skills;
