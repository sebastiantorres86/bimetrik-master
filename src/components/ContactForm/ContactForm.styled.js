import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px 1rem;
  background: #f5f5f5;

  @media only screen and (min-width: 768px) {
    padding: 1rem 126px;
  }
`;

export const Heading = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 56px;
  /* or 100% */

  text-align: center;
  letter-spacing: -0.5px;

  color: #2b292d;
`;

export const Label = styled.label`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0.5rem;
  line-height: 22px;
  /* identical to box height, or 137% */

  color: #2c3241;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 2rem;
  border: 1px solid rgba(44, 50, 65, 0.2);
  border-radius: 4px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height, or 200% */

  color: #2c3241;
  padding: 6px 15px;
`;

export const Textarea = styled.textarea`
  height: 168px;
  border: 1px solid rgba(44, 50, 65, 0.2);
  border-radius: 4px;
  margin-bottom: 2rem;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height, or 200% */

  color: #2c3241;
  padding: 6px 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    padding: 0 226px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
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
  :active {
    transform: translateY(4px);
  }
  :focus {
    outline: 0;
  }
`;
