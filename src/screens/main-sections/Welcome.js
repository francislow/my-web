import styled from 'styled-components'

function Welcome() {
  return (
    <Background>
      <DarkOverlay>
        <h1>Hey, I’m Francis</h1>
        <h3>I write code to add value to my world</h3>
      </DarkOverlay>
    </Background>
  )
}

const Background = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('/images/main_bg.jpg');
  height: 100vh;
  width: 100%;
`

const DarkOverlay = styled.div`
  background: linear-gradient(to top, rgba(10,10,10,1), rgba(0,0,0,0.05));
  height: 100vh;
  width: 100%;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 80px;
  }

  h3 {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 2;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 38px;
    }

    h3 {
      font-size: 12px;
      font-weight: 400;
    }
  }
`

export default Welcome
