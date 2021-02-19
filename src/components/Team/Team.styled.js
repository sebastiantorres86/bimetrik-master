import styled from 'styled-components'

export const Container = styled.div`
  background: #f4fbff;
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    padding: 3rem 126px;
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

export const ColumnText = styled.div`
  flex:2;
`

export const ColumnImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`

export const Avatar = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  padding: 0 2.5rem;
`

export const Subheading = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  /* or 100% */

  letter-spacing: -0.25px;
  text-align: center;

  color: #2b292d;
  margin-top: 0;
  margin-bottom: 1.5rem;
`

export const Copy = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25.56px;
  /* or 142% */

  color: #2c3241;
  margin-top: 0;
`
