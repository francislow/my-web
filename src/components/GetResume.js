import styled from 'styled-components'
import colors from '../configs/colors'
import docAnimation from "../configs/lottie/document.json";
import Lottie from "lottie-react";

function GetResume() {
  return (
    <Container>
      <LottieContainer>
        <Lottie animationData={docAnimation} />
      </LottieContainer>
      <div>
        <h1>Find out more about my technical background?</h1>
        <ContactButton onClick={() => window.open('/documents/resume.pdf')}>Get my resume</ContactButton>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.bg_color};
  padding: 100px 50px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  div {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 25px;
      color: white;
      font-weight: 300;
      margin-right: 40px;
      text-align: center;
    }

    @media (max-width: 868px) {
      flex-direction: column;

      h1 {
        font-size: 18px;
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
`

const LottieContainer = styled.div`
  width: 200px;

  @media (max-width: 768px) {
    width: 100px;
    margin-bottom: 0px;
  }
`
const ContactButton = styled.button`
  background-color: transparent;
  color: ${colors.yellow};
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${colors.yellow};
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.5s ease;
  font-size: 18px;

  &:hover {
    background-color: ${colors.yellow};
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export default GetResume
