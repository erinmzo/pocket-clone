import Link from "next/link";
import Button from "../common/Button/Button";

function MobileNav() {
  return (
    <div className="z-50 bg-[#fafafa] w-full absolute left-0 top-[80px] right-0 rounded-b-xl">
      <ul className="flex flex-col gap-8 py-8 px-8">
        <li>
          <Link href="">Features</Link>
        </li>
        <li>
          <Link href="">Reviews</Link>
        </li>
        <li>
          <Link href="">Pricing</Link>
        </li>
        <li>
          <Link href="">FAQs</Link>
        </li>
      </ul>
      <div className="flex flex-col justify-center gap-4 py-4 px-4">
        <Button content="Log in" textColor="text-black" outlineColor="border-gray-200" />
        <Button content="Download the app" textColor="text-white" bgColor="bg-black" />
      </div>
    </div>
  );
}

export default MobileNav;
