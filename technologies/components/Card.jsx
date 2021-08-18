import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import { device } from "../../styles/sizes";

const Card = ({ technology }) => {
  return (
    <>
      <GlobalStyles />
      <CardContainer id='CardContainer'>
        {'technology.imgSrc', console.log(technology.imgSrc)}
        <ImgContainer id='ImgContaienr'>
          <Img src={technology.imgSrc} alt={technology.name} />
        </ImgContainer>
        <TitleContainer id='TitleContainer'>
          <CardTitle id='CardTitle'>{technology.name}</CardTitle>
        </TitleContainer>
        <TecnologiesContainer id='TecnologiesContainer'>
          {technology.techs.map(tech => {
            return <Technology id='Technology' key={tech}>{tech}</Technology>
          })}
        </TecnologiesContainer>
      </CardContainer>
    </>
  )
}

export default Card

const ImgContainer = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
`

const Img = styled.img`
  width:50%;
  @media ${device.mobileS}{
    width:70%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:2rem 0;
`;

const CardTitle = styled.h4`
  color: black;
`;

const TecnologiesContainer = styled.div`
  display: grid;
  text-align:center;
  row-gap: 12px;
`;

const Technology = styled.div`
  color: white;
  background:rgb(1, 191, 113);
  border-radius:50px;
  font-size:18px;
  padding: 14px 0;
`;

const CardContainer = styled.div`
  display:flex;
  flex-direction:column;
  background:white;
  width:100%;
  height:fit-content;
  padding:3rem;
  max-width:25rem;
  @media ${device.mobileS}{
    border-radius:10px;
  }
`;
