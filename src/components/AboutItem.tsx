import React from "react";
import styled from "styled-components";
import colors from "../configs/colors";
import OptimizedImage from "./OptimizedImage";

interface Props {
  lowResUrl: string;
  highResUrl: string;
  title: string;
  type: number;
  children: React.ReactNode;
}

interface WrapperProps {
  type: number;
}

const AboutItem: React.FC<Props> = ({
  lowResUrl,
  highResUrl,
  title,
  type,
  children,
}) => {
  return (
    <Wrapper type={type}>
      <OptimizedImage lowResUrl={lowResUrl} highResUrl={highResUrl} />
      <div>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  h3 {
    color: #cacaca;
    font-size: 20px;
    letter-spacing: 5px;
    text-align: center;
  }

  p {
    font-size: 17px;
    text-align: center;
    margin-top: 10px;
    line-height: 22px;
  }

  a {
    color: ${colors.yellow};
    transition: all 0.2s ease;
  }

  a:hover {
    color: ${colors.blue};
  }

  img {
    height: 220px;
    min-width: 400px;
    object-fit: cover;
    order: ${(props) => (props.type === 0 ? 0 : 1)};
    margin-right: ${(props) => (props.type === 0 ? "100px" : 0)};
    margin-left: ${(props) => (props.type === 1 ? "100px" : 0)};
  }

  @media (max-width: 1180px) {
    flex-direction: column;

    h3 {
      margin-top: 18px;
    }

    p {
      margin: 20px 100px;
    }

    img {
      margin: 0;
      order: 0;
    }
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
      margin: 20px 30px;
    }

    img {
      height: 130px;
      min-width: 250px;
    }
  }
`;

export default AboutItem;
