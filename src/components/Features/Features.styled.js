import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;
  @media only screen and (min-width: 768px) {
    height: 100vh;
    height: auto;
    padding: 1rem 126px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Column = styled.div`
  flex: 100%;

  @media only screen and (min-width: 768px) {
    flex: 33%;
  }
`

export const Heading = styled.h2`
  margin: 0;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  /* or 100% */

  letter-spacing: -0.357143px;

  color: #2b292d;

  @media only screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 56px;
    /* or 100% */

    text-align: center;
    letter-spacing: -0.5px;
  }
`
