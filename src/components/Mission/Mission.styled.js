import styled from "styled-components";

export const Container = styled.div`
  background: #c7cfdb;

  @media only screen and (min-width: 768px) {
    padding: 1rem 0 3rem;
  }
`;

export const RowOdd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  padding-bottom: 2rem;
  padding: 1rem 15px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 2rem 126px 3rem;
  }
`;

export const RowEven = styled(RowOdd)`
  background: #fff;
`;

export const ColumnHeading = styled.div`
  flex: 1;
`;

export const Ul = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

export const ColumnCopy = styled.div`
  flex: 1;
  display: flex;
`;

export const Heading = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  /* or 100% */

  letter-spacing: -0.5px;

  color: #2b292d;
  margin: 0 0 1rem;

  @media only screen and (min-width: 768px) {
    padding-right: 23rem;
  }
`;

export const Subheading = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  /* or 100% */

  letter-spacing: -0.25px;

  color: #2b292d;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: center;
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Item = styled.li`
  list-style-type: square;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25.56px;
  /* or 142% */

  color: #2c3241;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Copy = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25.56px;
  /* or 142% */

  color: #2c3241;
  margin-top: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0;

  @media only screen and (min-width: 768px) {
    width: 75%;
    margin-left: 6rem;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Avatar = styled.img`
  width: 70%;
  height: auto;
  border-radius: 50%;
  padding: 2rem;
`;

export const Blockquote = styled.blockquote`
  position: relative;
  padding: 1.5rem 0.5rem;
  background: #fff;
  border-radius: 4px;

  @media only screen and (min-width: 768px) {
    padding: 60px 80px 40px;
  }

  ::before {
    position: absolute;
    top: -50px;

    @media only screen and (min-width: 768px) {
      top: 25px;
    }

    content: '"';
    font-size: 200px;
    color: rgba(0, 0, 0, 0.1);
  }
`;

export const BlockquoteCopy = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
  color: #2b292d;
`;

export const QuoteAuthor = styled.p`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-top: 0;
  color: #2b292d;
`;
