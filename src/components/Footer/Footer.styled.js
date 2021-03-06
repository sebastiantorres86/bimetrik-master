import styled from 'styled-components'

export const Container = styled.div`
  height: 60vh;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #1d3e6e;
  @media only screen and (min-width: 768px) {
    height: auto;
    padding: 1rem 126px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Column = styled.div`
  flex: 100%;
  text-align: center;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-around;
    height: 130px;
    /* width: 33%; */
  }
`

export const List = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  color: #fff;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-content: start;
    margin-bottom: 0;
  }
`

export const SocialList = styled(List)`
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 100%;
  }
`

export const SocialLink = styled.li`
  color: #fff;
  text-align: center;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    /* text-align: center; */
    /* padding-right: 1.5rem; */
    margin-bottom: 0;
  }
`

export const Picture = styled.div`
  width: 30px;
  height: auto;
  margin: 0 1rem;

  @media only screen and (min-width: 768px) {
    margin: 0 0 0 1.5rem;
  }
`

export const Copy = styled.p`
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 768px) {
    text-align: left;
    padding-right: 2rem;
    margin-bottom: 0;
  }
`

export const Copyright = styled.small`
  color: #fff;
  text-align: right;
`
