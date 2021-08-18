import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from "../styles/GlobalStyles";
import { device } from "../styles/sizes";
import Card from './components/Card'

const Technologies = ({ technologies, title }) => {
  return (
    <>
      <GlobalStyles />
      <Container id='Container'>
        <TitleContainer id='TitleContainer'>
          <Title id='Title'>
            {title}
          </Title>
        </TitleContainer>
        <CardGrid id='CardGrid'>
          {technologies.map(technology => {
            return <Card id='Card' key={technology.name} technology={technology} />
          })}
        </CardGrid>
      </Container>
    </>
  );
}

export default Technologies;

const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:3rem 0;
`

const Title = styled.h2`
  color:white;
  font-size:2rem;
  @media ${device.mobileM}{
    font-size:3rem;
  }
`

const CardGrid = styled.div`
  display: grid;
  justify-items: center;
  justify-content:center;
  width:100%;
  gap: 1rem;
  grid-auto-rows:max-content;
  grid-template-columns:repeat(auto-fit, minmax(20rem, 3fr));
  @media ${device.mobileM} {
    padding: 0 2rem;
  }
  @media ${device.laptop}{
    padding: 0 10rem;
  }
`

const Container = styled.div`
  width:100%;
  justify-content:center;
  background: #010606;
  padding-bottom: 3rem;
`
