import styled from 'styled-components'
import colors from '../configs/colors'
import { AiFillGithub, AiOutlineInstagram, AiOutlineCopyright } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  hasBackground: boolean
}

const Footer: React.FC<Props> = ({hasBackground}) => {

  return (
    <Container hasBackground={hasBackground}>
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

        <CreditText><Link to='/credits'>Assets</Link></CreditText>
      </DarkOverlay>
    </Container>
  )
}

const Container = styled.div<Props>`
  background: url(${props => props.hasBackground ? '/images/footer_bg.jpg' : ''}), url(${props => props.hasBackground ? '/images/footer_lowres_bg.jpg' : ''});
  background-color: ${props => props.hasBackground ? 'transparent' : colors.bg_color};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
`

const DarkOverlay = styled.div`
  position: relative;
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

const CreditText = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  a {
    transition: all 0.5s ease;
    color: grey;
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
  }

  a:hover {
    color: white;
  }
`

export default Footer
