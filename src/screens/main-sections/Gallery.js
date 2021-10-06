import styled from 'styled-components'
import { Link } from "react-router-dom";
import projectsData from '../../configs/catalogue/projectsData'
import Lottie from "lottie-react";
import bulbAnimation from "../../configs/lottie/light-bulb.json";
import colors from '../../configs/colors';

function Gallery() {
  return (
    <Container>
      <Title>
        <Lottie style={{width: "60px"}} animationData={bulbAnimation} />
        <h1>Some of my work</h1>
      </Title>
      <Wrapper>
        {
          projectsData.map((data, index) => (
            <Item key={index}>
              <Link to={`/projects/${data.id}`}>
                <img alt="" src={data.images[0]} />
              </Link>
            </Item>
          ))
        }
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.bg_color};
  padding: 0 10% 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 25px;
    color: white;
    font-weight: 400;
    margin-left: 7px;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: -12px;
`

const Wrapper = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1480px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const Item = styled.div`
  position: relative;
  border-radius: 8px;
  border: 3px solid rgb(100, 100, 100);
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 56.25%; /* This sets the div to 16 : 9 aspect ratio */

  transition: all 250ms cubic-bezier(0.2, 0.5, 0.7, 0.4);

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    object-fit: cover;
    top: 0;
  }

  &:hover {
    box-shadow:  12px 12px 40px -6px rgb(255 255 255 / 80%);
    border: 3px solid rgb(255, 255, 255);

    img {
      opacity: 1;
    }
  }
`

export default Gallery
