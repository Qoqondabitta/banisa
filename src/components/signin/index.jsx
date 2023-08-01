import React from "react";
import {
  Gradient,
  Wrapper,
  Content,
  Form,
  Input,
  Button,
  LogoWrapper,
  ContentWrapper,
} from "./style";

export const Signin = () => {
  return (
    <Gradient>
      <Wrapper>
        <div className="container">
          <ContentWrapper>
            <LogoWrapper>
              <div>
                <span className="logo-med">Med</span>
                <span className="logo-dical">dical</span>
              </div>
            </LogoWrapper>
            <Content>
              <Form>
                <Input placeholder="Login" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Login</Button>
              </Form>
            </Content>
          </ContentWrapper>
        </div>
      </Wrapper>
    </Gradient>
  );
};

export default Signin;
