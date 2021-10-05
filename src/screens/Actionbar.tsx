import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import colors from "../configs/colors";
import { BiHomeAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import projects from "../configs/catalogue/projectsData";

function Actionbar() {
  enum ActiveMainPage { Home, About, Projects }
  let history = useHistory()

  function computeActiveMainPage() {
    let active : ActiveMainPage;
    if (history.location.pathname === '/') {
      active = ActiveMainPage.Home
    } else if (history.location.pathname === '/about') {
      active = ActiveMainPage.About
    } else {
      active = ActiveMainPage.Projects
    }
    return active
  }

  function computeActiveProject() {
    let activeId : string = '';

    if (history.location.pathname.includes('/projects')) {
      // Set active project
      projects.forEach(({id}) => {
        if (history.location.pathname.includes(`/${id}`)) {
          activeId = id
        }
      })
    }

    return activeId
  }
  let [activeMainPage, setActiveMainPage] = useState<ActiveMainPage>(computeActiveMainPage()) 
  let [activeProject, setActiveProject] = useState<string>(computeActiveProject())

 
  history.listen((location: {pathname: string}, action) => {
    setActiveMainPage(computeActiveMainPage())
    setActiveProject(computeActiveProject())
  })

  function renderProjectLinks() {
    return projects.map(({id, name}) => {
      return (
        <Link to={`/projects/${id}`} key={id}>
          <span style={{color: activeProject === id ? colors.yellow : ''}}>{name.toUpperCase()}</span>
        </Link>
      )
    })
  }

  return (
    <Wrapper>
      <Left>
        <Link to={`/`}>
          <BiHomeAlt style={{color: activeMainPage === ActiveMainPage.Home ? colors.yellow : ''}} />
        </Link>
      </Left>

      <Right>
        <NavLink>
          <Link to={`/about`}>
            <span style={{color: activeMainPage === ActiveMainPage.About ? colors.yellow : ''}}>ABOUT</span>
          </Link>
        </NavLink>
        <DropDownLink style={{color: activeMainPage === ActiveMainPage.Projects ? colors.yellow : ''}}>
          <span>PROJECTS</span>
          <DropArrow>
            <RiArrowDropDownLine />
          </DropArrow>
          <DropDownModal>
            { renderProjectLinks() }
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
    font-size: 13px;
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
