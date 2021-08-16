import React from "react";
import styled, { createGlobalStyle } from 'styled-components';

import Card from './components/Card'

const Technologies = ({ technologies }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TitleContainer>
          <Title>
            Title
          </Title>
        </TitleContainer>
        <CardGrid>
          {technologies.map(technology => {
            return <Card key={technology.name} technology={technology} />
          })}
        </CardGrid>
      </Container>
    </>
  );
}

export default Technologies;

const TitleContainer = styled.div`

`

const Title = styled.h2`
  color:white;
`

const CardGrid = styled.div`

`

const Container = styled.div`
  background: #010606;
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