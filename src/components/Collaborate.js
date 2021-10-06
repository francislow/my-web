import styled from 'styled-components'
import colors from '../configs/colors'
import collabAnimation from "../configs/lottie/collaborate.json";
import Lottie from "lottie-react";

function Collaborate() {
  return (
    <Container>
      <LottieContainer>
        <Lottie animationData={collabAnimation} />
      </LottieContainer>
      <div>
        <h1>Thinking of collaborating with me?</h1>
        <ContactButton onClick={() => window.open('mailto:francislow_6@hotmail.com')}>Get in touch</ContactButton>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.bg_color};
  padding: 0px 50px 150px;
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

    @media (max-width: 768px) {
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
  margin-bottom: -20px;

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

export default Collaborate
