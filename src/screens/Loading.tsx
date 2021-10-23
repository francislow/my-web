import React from 'react'
import styled from 'styled-components';
import colors from '../configs/colors';
import Lottie from "lottie-react";
import loadingAnim from "../configs/lottie/loading.json";

function Loading() {
  return (
    <Wrapper>
      <Lottie style={{width: "100px"}} animationData={loadingAnim} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${colors.bg_color};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading
