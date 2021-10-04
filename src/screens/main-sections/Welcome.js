import { useEffect } from 'react';
import styled from 'styled-components'
import colors from '../../configs/colors'

function Welcome() {

  // useEffect(() => {
  //   function trackScrolling(a) {
  //     console.log(a.target.scrollingElement.scrollTop)
  //     console.log(a)
  //   };

  //   document.addEventListener('scroll', trackScrolling);
  // }, [])

  return (
    <Background>
      <DarkOverlay>
        {/* <ResumeButton>
          Get a copy of my resume
        </ResumeButton> */}
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
      font-size: 45px;
    }

    h3 {
      font-size: 12px;
      font-weight: 400;
    }
  }
`

// const ResumeButton = styled.button`
//   position: fixed;
//   top: 0;
//   right: 0;
//   cursor: pointer;
//   margin: 20px;
//   font-weight: 600;
//   padding: 10px 15px;
//   border-radius: 5px;
//   color: black;
//   z-index: 99;

//   background-color: transparent;
//   border: 2px solid black;
//   transition: all 140ms cubic-bezier(0.2, 0.5, 0.7, 0.4);

//   &:hover {
//     background-color: ${colors.yellow};
//     border: 2px solid ${colors.yellow};
//   }
// `

export default Welcome
