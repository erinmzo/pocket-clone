import Image from "next/image";
import Nav from "../Header/Nav";
import Button from "../common/Button/Button";
import Container from "../common/Container/Container";
import Logo from "../common/Logo/Logo";

function Footer() {
  return (
    <div className="border-t border-gray-200 py-[50px] bg-[#fafafa]">
      <Container>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between py-10">
          <div className="flex flex-col items-start gap-10">
            <Logo />
            <Nav />
          </div>
          <div className="flex gap-5 items-center">
            <Image src="/qr.svg" alt="QR code" width={80} height={80} />
            <div>
              <h6 className="font-bold text-lg">Download the app</h6>
              <p className="mt-2 text-gray-600">
                Scan the QR code to download the
                <br /> app from the App Store.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 md:gap-0 justify-between items-center border-t border-gray-200 py-[40px]">
          <p className="text-gray-400">© Copyright 2024. All rights reserved.</p>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Email address"
              className="h-10 px-4 rounded-lg border border-gray-200 placeholder:text-[14px]"
            />
            <Button content="Join our newsletter" bgColor="bg-[#06b6d4]" textColor="text-white" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
