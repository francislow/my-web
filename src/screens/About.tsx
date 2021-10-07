import styled from "styled-components";
import AboutItem from "../components/AboutItem";
import colors from "../configs/colors";
import Footer from "./Footer";
import GetResume from "../components/GetResume";
import { useLocation } from "react-router";
import { useEffect } from "react";

function About() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Page>
        <TopBackground>
          <DarkOverlay>
            <Photo src="/images/francis_pic-min.png"></Photo>
            <NameText>FRANCIS LOW</NameText>
            <Headline>
              FULL-STACK DEVELOPER
            </Headline>
          </DarkOverlay>
        </TopBackground>
        <BottomWrapper>
          <Content>
            <AboutItem
              imgUrl="/images/education.jpg"
              title="BACKGROUND"
              type={0}
            >
              <p>
                Based in Singapore, I have graduated from the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.nus.edu.sg/"
                >
                  National University of Singapore
                </a>{" "}
                in year 2021 with a degree in Applied Mathematics and a minor in
                Computer Science. In the summer of 2019, I spent my time in{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.asia.edu.tw/en/"
                >
                  Asia University Taiwan
                </a>{" "}
                studying a web design course offered by the school.
              </p>
            </AboutItem>
            <AboutItem
              imgUrl="/images/work.jpg"
              title="WORK EXPERIENCE"
              type={1}
            >
              <p>
                I previously interned at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.asia.edu.tw/en/"
                >
                  Webpuppies Digital
                </a>
                , an IT consulting firm, where I work on a mobile application
                and a content management web application for{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maxi-cash.com/about-us/"
                >
                  Maxi-Cash
                </a>
                . I am currently a full-time software engineer at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ufinity.com/"
                >
                  Ufinity
                </a>
                , an IT solutions engineering company.
              </p>
            </AboutItem>
          </Content>
        </BottomWrapper>
        <GetResume />
      </Page>

      <Footer hasBackground={false} />
    </>
  );
}

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopBackground = styled.div`
  height: 400px;
  width: 100%;
  background-image: url("/images/about_bg-min.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const DarkOverlay = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    60%,
    rgb(10, 10, 10)
  );
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 170px;
  height: 170px;
  object-fit: cover;
  opacity: 0.9;

  padding: 3px;
  background-color: #fff;
  border: 3px solid #d4d4d4;
`;

const NameText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 30px;
  margin-top: 20px;
  letter-spacing: 8px;

  @media (max-width: 768px) {
    font-size: 22px;
    letter-spacing: 6px;
  }
`;
const Headline = styled.p`
  color: #cccccc;
  font-size: 15px;
  margin-top: 3px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const BottomWrapper = styled.div`
  flex-grow: 1;
  background-color: ${colors.bg_color};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 60px;
`;

const Content = styled.div`
  margin-top: 70px;
  max-width: 1100px;
  color: white;

  @media (max-width: 768px) {
    margin-top: 0px;
    padding: 40px;
  }
`;

export default About;
