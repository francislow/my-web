import styled from 'styled-components'
import colors from '../configs/colors'
import { AiFillGithub, AiOutlineInstagram, AiOutlineCopyright } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiChevronDoubleUp } from 'react-icons/hi';

function Footer({hasBackground}) {
  const Container = styled.div`
    background: url(${hasBackground ? '/images/footer_bg.jpg' : ''});
    background-color: ${hasBackground ? 'transparent' : colors.bg_color};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
  `

  return (
    <Container>
      <DarkOverlay>
        <h1 style={{height: '100%'}}>Around the web</h1>
        <Separator />
        <Socials>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/friendcislol/">
              <AiOutlineInstagram />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/francislow/">
              <AiFillGithub />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/francis-low-bb1b4079/">
              <FaLinkedinIn />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:francislow_6@hotmail.com">
              <FiMail />
          </a>
        </Socials>

        <Copyright>
          <AiOutlineCopyright />
          <p>{new Date().getFullYear() + ' Francis Low'}</p>
        </Copyright>
      </DarkOverlay>
    </Container>
  )
}

const DarkOverlay = styled.div`
  background: linear-gradient(to bottom, rgba(10,10,10,1), 75%, rgba(0,0,0,0.0));
  width: 100%;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    background: linear-gradient(to bottom, rgba(10,10,10,1), 60%, rgba(0,0,0,0.0));
  }
`

const Separator = styled.div`
  margin-top: 15px;
  height: 2px;
  width: 60px;
  background-color: white;
  border-radius: 50%;


`

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  a {
    border-radius: 99px;
    padding: 10px;
    font-size: 25px;
    color: black;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
    cursor: pointer;

    transition: all 0.3s;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  a:hover {
      background-color: rgb(140, 140, 140);
  }

  
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-top: 35px;
  font-size: 11px;

  p {
    margin-left: 6px;
  }
`

export default Footer
