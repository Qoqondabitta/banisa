import React from "react";
import SubNavbar from "../../components/subnavbar";
import { Wrapper, Link, Section, LoginBtn, WrapperSection } from "./style";
import { navbar } from "../../utils/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer";

const Navbar = () => {
  return (
    <>
      <SubNavbar />
      <Wrapper>
        <div className="container">
          <WrapperSection>
            <Section>
              {navbar.map(({ path, title, hidden }, index) => {
                return (
                  !hidden && (
                    <Link key={index} to={path}>
                      {title}
                    </Link>
                  )
                );
              })}
            </Section>
            <Section>
              <LoginBtn>Login</LoginBtn>
            </Section>
          </WrapperSection>
        </div>
      </Wrapper>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
