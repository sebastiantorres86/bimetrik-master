import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 1rem .5rem;
  margin-bottom: 1rem;
  border: none;
  color: #fff;
  background: #1d3e6e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
  :hover {
    background: rgba(29, 62, 110, 0.5);
    color: #1d3e6e;
    font-weight: 700;
  }
  :active {
    transform: translateY(4px);
  }
  :focus {
    outline: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 150px;
    height: 48px;
    margin-bottom: 0;
  }
`

export const ButtonWhite = styled(Button)`
  color: #1d3e6e;
  background: #fff;
`

export const ButtonCall = styled(Button)`
  width: 200px;
`
