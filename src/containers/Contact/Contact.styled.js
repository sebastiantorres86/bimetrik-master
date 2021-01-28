import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background: #c7cfdb;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`