import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Card = ({ technology }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        {'technology.imgSrc', console.log(technology.imgSrc)}
        <ImgContainer>
          <Img src={technology.imgSrc} alt={technology.name} />
        </ImgContainer>
        <TitleContainer>
          <CardTitle>{technology.name}</CardTitle>
        </TitleContainer>
        <TecnologiesContainer>
          {technology.techs.map(tech => {
            return <Technology key={tech}>{tech}</Technology>
          })}
        </TecnologiesContainer>
      </Container>
    </>
  )
}

export default Card

const ImgContainer = styled.div`

`

const Img = styled.img`
  width:100%;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:2rem 0;
`
const CardTitle = styled.h4`
  color: black;
`

const TecnologiesContainer = styled.div`
  display: grid;
  text-align:center;
  row-gap: 12px;
`

const Technology = styled.div`
  color: white;
  background:rgb(1, 191, 113);
  border-radius:50px;
  font-size:18px;
  padding: 14px 0;
`

const Container = styled.div`
  border-radius:10px;
  background:white;
  width:20rem;
  height:fit-content;
  padding:2rem;
`

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
} 
#root {
  margin:0 auto;
}
`