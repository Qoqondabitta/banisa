import { styled } from "styled-components";
import main from "../../assets/images/main.png";

const Gradient = styled.div`
  background: linear-gradient(90deg, #0098b9 0%, rgba(255, 255, 255, 0) 100%);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${main}) !important;
  background-repeat: no-repeat;
  background-size: 700px;
  background-position: right 30px center;
  @media screen and (max-width: 800px) {
    background-image: none !important;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  display: block;
  width: 100%;
  top: 40vh;
  position: absolute;
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: block;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

const Input = styled.input`
  font-family: var(--WorkSans);
  padding: 10px 0;
  width: 100%;
  max-width: 423px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  color: #fff;
  outline: none;
  &::placeholder {
    color: var(--c1);
  }
  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
`;

const Button = styled.button`
  width: 175px;
  padding: 15px 0;
  border: none;
  border-radius: 2px;
  background: var(--c3);
  font-family: var(--WorkSans);
  color: var(--c1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0s linear;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.96);
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export {
  Gradient,
  Wrapper,
  LogoWrapper,
  ContentWrapper,
  Content,
  Form,
  Input,
  Button,
};
