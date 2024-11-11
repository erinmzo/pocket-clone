import Image from "next/image";
import Link from "next/link";
import AppStore from "../common/Button/AppStore";
import WatchTheVideo from "../common/Button/WatchTheVideo";
import Container from "../common/Container/Container";
import Partner from "../common/Logo/Partner";

function Hero() {
  return (
    <div className="bg-[#fafafa] py-[50px] md:py-[150px]">
      <Container>
        <div className="flex flex-wrap">
          <div className="flex flex-col">
            <div className="flex flex-col gap-6 max-w-xl">
              <h2 className="font- text-[40px] tracking-tight text-gray-900">Invest at the perfect time.</h2>
              <p className="text-lg text-gray-600">
                By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to
                maximize profit, and exactly when to sell to avoid painful losses.
              </p>
            </div>
            <ul className="mt-8 flex gap-4 ">
              <li>
                <Link href="">
                  <AppStore />
                </Link>
              </li>
              <li>
                <Link href="">
                  <WatchTheVideo />
                </Link>
              </li>
            </ul>
          </div>
          <Image src="/bg-hero.jpg" alt="Hero" width={600} height={0} className="md:-mt-[100px]" />
          <Partner />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
