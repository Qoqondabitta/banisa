import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  background-color: var(--c3);
  height: 80px;
`;

const WrapperSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  .active {
    color: var(--c4);
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  color: #fff;
  font-family: var(--WorkSans);
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;

const LoginBtn = styled.button`
  border: none;
  cursor: pointer;
  display: inline-block;
  width: 173px;
  height: 45px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 18px;
  font-family: var(--WorkSans);
  color: var(--c3);
  border-radius: 100px;
  background-color: var(--c4);
  transition: all 0s linear;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export { Wrapper, Link, WrapperSection, Section, LoginBtn };
