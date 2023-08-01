import React from "react";
import {
  Wrapper,
  WrapperContent,
  Content,
  ContentElements,
  Icon,
  Column,
  ContentTitle,
  ContentDescription,
  ContentY,
} from "./style";

const SubNavbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <WrapperContent>
          {/* logo  */}
          <div className="logo">
            <span className="logo-med">Med</span>
            <span className="logo-blue">dical</span>
          </div>

          {/* content  */}
          <Content>
            <ContentY>
              <ContentElements>
                <Icon.Call />
                <Column>
                  <ContentTitle>Emergency</ContentTitle>
                  <ContentDescription>(237) 681-812-255</ContentDescription>
                </Column>
              </ContentElements>

              <ContentElements>
                <Icon.Hour />
                <Column>
                  <ContentTitle>Work Hour</ContentTitle>
                  <ContentDescription>
                    09:00 - 20:00 Everyday
                  </ContentDescription>
                </Column>
              </ContentElements>
            </ContentY>

            <ContentElements>
              <Icon.Location />
              <Column>
                <ContentTitle>Location</ContentTitle>
                <ContentDescription>0123 Some Place</ContentDescription>
              </Column>
            </ContentElements>
          </Content>
        </WrapperContent>
      </div>
    </Wrapper>
  );
};

export default SubNavbar;
