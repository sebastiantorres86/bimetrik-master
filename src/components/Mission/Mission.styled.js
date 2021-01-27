import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 15px;

  @media only screen and (min-width: 768px) {
    padding: 1rem 126px 3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ColumnHeading = styled.div`
  flex: 1;
`;

export const ColumnCopy = styled.div`
  flex: 2.5;
`;

export const Heading = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 46px;
  /* or 100% */

  letter-spacing: -0.5px;

  color: #2b292d;

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
`;

export const Copy = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  /* or 142% */

  color: #2c3241;
  margin-top: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 3rem 0;
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
  padding: 0;

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
