import styled from 'styled-components'

export const Container = styled.div`
  background: transparent;
  width: 100%;
  height: auto;
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    padding: 1rem 1rem 1rem 126px;
    width: 50%;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  @media only screen and (min-width: 768px) {
    width: 500px;
    height: auto;
  }
`

export const Heading = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  /* or 100% */

  text-align: center;
  letter-spacing: -0.5px;

  color: #2b292d;
  margin: 0;
`

export const Label = styled.label`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0.2rem;
  line-height: 22px;
  /* identical to box height, or 137% */

  color: #2c3241;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
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
`

export const Textarea = styled.textarea`
  height: 168px;
  border: 1px solid rgba(44, 50, 65, 0.2);
  border-radius: 4px;
  margin-bottom: 1rem;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height, or 200% */

  color: #2c3241;
  padding: 6px 15px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`

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
`
