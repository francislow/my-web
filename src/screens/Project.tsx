import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import projectsData from "../configs/catalogue/projectsData";
import colors from "../configs/colors";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { BsCalendarFill } from "react-icons/bs";
import { IoExtensionPuzzle } from "react-icons/io5";
import Footer from "./Footer";

function Project() {
  const { projectId } = useParams<{ projectId: string }>();
  const projectData = projectsData.filter((data) => data.id === projectId)[0];

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function renderCarouselImages() {
    return projectData.images.map((image) => {
      return (
        <div
          style={{ height: "450px", backgroundColor: "rgba(200, 200, 200, 0.1)" }}
        >
          <img src={image} />
        </div>
      );
    });
  }

  return (
    <>
      <Page>
        <DarkOverlay>
          <CarouselWrapper>
            <Carousel
              autoPlay={true}
              dynamicHeight={false}
              showStatus={false}
              showIndicators={true}
              interval={3500}
              showThumbs={false}
              emulateTouch={true}
              swipeable={true}
              stopOnHover={true}
              infiniteLoop={true}
            >
              {renderCarouselImages()}
            </Carousel>
          </CarouselWrapper>
          <Content>
            <ProjectName>{projectData.name}</ProjectName>
            <LinkWrapper>
              {projectData.playstoreUrl ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer external"
                  href={projectData.playstoreUrl}
                >
                  <img src={"/images/playstore.svg"}></img>
                </a>
              ) : (
                <></>
              )}
              {projectData.appstoreUrl ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer external"
                  href={projectData.appstoreUrl}
                >
                  <img src={"/images/appstore.svg"}></img>
                </a>
              ) : (
                <></>
              )}
              {projectData.weburl ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer external"
                  href={projectData.weburl}
                >
                  <img src={"/images/web.svg"}></img>
                </a>
              ) : (
                <></>
              )}
              {projectData.sourceCodeLink ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer external"
                  href={projectData.sourceCodeLink}
                >
                  <img src={"/images/github.svg"}></img>
                </a>
              ) : (
                <></>
              )}
            </LinkWrapper>
            <ProjectSpecialLabel>
              <BsCalendarFill />
              <p>{projectData.timeline}</p>
            </ProjectSpecialLabel>

            <ProjectSpecialLabel>
              <IoExtensionPuzzle />
              <p>{projectData.type}</p>
            </ProjectSpecialLabel>

            <ProjectDesc>{projectData.descriptions}</ProjectDesc>

            <ProjectTools>
              {projectData.devTools.map((title) => {
                return <p>{title}</p>;
              })}
            </ProjectTools>
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

const CarouselWrapper = styled.div`
  max-width: 640px;
  margin-top: 100px;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: contain;
    width: auto;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Content = styled.div`
  max-width: 640px;
  color: white;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const ProjectName = styled.h1`
  margin-top: 40px;
  font-size: 35px;
  letter-spacing: 7px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const LinkWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;

  a {
    margin-right: 20px;

    img {
      width: 38px;
      height: 38px;
    }
  }

  @media (max-width: 768px) {
    font-size: 25px;

    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const ProjectSpecialLabel = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 7px;
  font-weight: 600;

  p {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const ProjectDesc = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProjectTools = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;

  p {
    margin-right: 7px;
    background-color: ${colors.yellow};
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bold;
    width: fit-content;
    color: black;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

export default Project;
