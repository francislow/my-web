import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../configs/colors";
import { BiHomeAlt, BiNetworkChart, BiWorld } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

function Actionbar() {
  return (
    <Wrapper>
      <Left>
        <Link to={`/`}>
          <BiHomeAlt />
        </Link>
      </Left>

      <Right>
        <NavLink>
          <Link to={`/about`}>
            <span>ABOUT</span>
          </Link>
        </NavLink>
        <DropDownLink>
          <span>PROJECTS</span>
          <DropArrow>
            <RiArrowDropDownLine />
          </DropArrow>
          <DropDownModal>
            <Link to={`/projects/assemble`}>
              <span>ASSEMBLE</span>
            </Link>
            <Link to={`/projects/emaily`}>
              <span>EMAILY</span>
            </Link>
            <Link to={`/projects/unmix`}>
              <span>UNMIX</span>
            </Link>
            <Link to={`/projects/poofers`}>
              <span>POOFERS</span>
            </Link>
          </DropDownModal>
        </DropDownLink>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), 50%, rgba(0,0,0,0.0));
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 14px 18px;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;

  > a {
    transition: all 0.5s ease;
    color: white;
    font-size: 25px;
    text-decoration: none;
  }

  > a:visited, > a:active {
    text-decoration: none;
    color: white;
  }

  > a:hover {
    color: ${colors.yellow};
  }

  @media (max-width: 768px) {
    > a {
      font-size: 18px;
    }
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
`

const DropArrow = styled.div`
  font-size: 20px;
  display: flex;

  transform-origin: center center;
  transform: rotate(-90deg);
  transition: all 0.4s ease;
`;

const DropDownModal = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  top: 55px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;

  > a {
    transition: all 0.5s ease;
    color: white;
    font-size: 14px;
    font-weight: 400;
    margin: 5px 10px;
    text-decoration: none;
  }

  > a:visited, > a:active {
    text-decoration: none;
    color: white;
  }

  > a:hover {
    color: ${colors.yellow};
  }

  @media (max-width: 768px) {
    top: 40px;

    > a {
      margin: 4px 8px;
      font-size: 12px;
    }
  }
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;

  color: white;
  transition: all 0.2s ease;

  a, a:visited, a:active {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: ${colors.yellow};
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const DropDownLink = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  font-size: 15px;
  font-weight: 500;
  cursor: default;

  color: white;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.yellow};

    ${DropArrow} {
      transform-origin: center center;
      transform: rotate(0deg);
    }

    ${DropDownModal} {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Actionbar;
