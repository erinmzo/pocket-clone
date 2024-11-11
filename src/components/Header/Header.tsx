"use client";
import { useState } from "react";
import Button from "../common/Button/Button";
import Container from "../common/Container/Container";
import Logo from "../common/Logo/Logo";
import MobileNav from "./MobileNav";
import MobileNavButton from "./MobileNavButton";
import Nav from "./Nav";

function Header() {
  const [IsOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const handleIsOpenMobileNav = () => {
    setIsOpenMobileNav(!IsOpenMobileNav);
  };

  return (
    <>
      <div className="relative z-50 py-8 bg-[#fafafa] ">
        <Container>
          <div className="relative flex w-full justify-between items-center">
            <div className="flex items-center gap-16">
              <Logo />
              <Nav />
            </div>
            <div className="hidden md:flex gap-5">
              <Button content="Log in" textColor="text-black" outlineColor="border-gray-300" />
              <Button content="Download" bgColor="bg-black" textColor="text-white" />
            </div>
            <MobileNavButton onClick={handleIsOpenMobileNav} IsOpenMobileNav={IsOpenMobileNav} />
          </div>
        </Container>
        {IsOpenMobileNav && <MobileNav />}
      </div>
      {IsOpenMobileNav && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleIsOpenMobileNav}></div>
      )}
    </>
  );
}

export default Header;
