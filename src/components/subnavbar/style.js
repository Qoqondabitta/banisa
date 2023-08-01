import { styled } from "styled-components";
import { ReactComponent as call } from "../../assets/icons/call.svg";
import { ReactComponent as hour } from "../../assets/icons/hour.svg";

import { ReactComponent as location } from "../../assets/icons/location.svg";

const Wrapper = styled.div``;

const WrapperContent = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 760px) {
    display: block;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
  }
`;

const ContentY = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentElements = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 768px) {
    justify-content: space-between !important;
  }
`;

const ContentTitle = styled.div`
  color: var(--c3);
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  @media screen and (max-width: 1050px) {
    font-size: 12px;
  }
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`;

const ContentDescription = styled.div`
  color: var(--c5);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 1050px) {
    font-size: 12px;
  }
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Icon = styled.img`
  width: 10px;
`;

Icon.Call = styled(call)`
  @media screen and (max-width: 576px) {
    width: 20px;
  }
`;
Icon.Hour = styled(hour)`
  @media screen and (max-width: 576px) {
    width: 20px;
  }
`;
Icon.Location = styled(location)`
  @media screen and (max-width: 576px) {
    width: 20px;
  }
`;

export {
  Wrapper,
  WrapperContent,
  Content,
  ContentElements,
  Icon,
  Column,
  ContentTitle,
  ContentDescription,
  ElementWrapper,
  ContentY,
};
