import styled from "styled-components";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Page>
        <DarkOverlay>
          <Content>
          </Content>
        </DarkOverlay>
      </Page>
      <Footer hasBackground={false} />
    </>
  );
}

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url("/images/project_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const DarkOverlay = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    20%,
    rgb(10, 10, 10)
  );
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    70%,
    rgb(10, 10, 10)
  );
  }
`;

const Content = styled.div`
  max-width: 640px;
  color: white;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

export default About;
