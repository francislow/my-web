import styled from "styled-components";

interface Props {
  title: string;
  imageUrl: string;
  href?: string;
}

const SkillLink: React.FC<Props> = ({ title, imageUrl, href }) => {
  return (
    <Item href={href} target="_blank" rel="noopener noreferrer external">
      <img alt="" src={imageUrl}></img>
      <div>
        <p>{title}</p>
      </div>
    </Item>
  );
};

const Item = styled.a`
  position: relative;
  padding-bottom: 100%; /* This sets the div to 16 : 9 aspect ratio */

  transition: all 250ms cubic-bezier(0.2, 0.5, 0.7, 0.4);

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 1;
    object-fit: cover;
    top: 0;
  }

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: rgba(10, 10, 10, 0.9);

    opacity: 0;
    transition: all 140ms cubic-bezier(0.2, 0.5, 0.7, 0.4);

    p {
      color: transparent;
      font-weight: 600;
      text-align: center;
      display: inline;
      white-space: nowrap;

      font-size: 10px;
      transition: all 150ms cubic-bezier(0.2, 0.5, 0.7, 0.4) 0.14s;
    }

    &:hover {
      opacity: 1;
    }

    &:hover > p {
      color: white;
      font-size: 15px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

export default SkillLink;
