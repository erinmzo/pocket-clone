import Link from "next/link";

function Nav() {
  return (
    <ul className="hidden md:flex gap-8 text-[14px] text-gray-700">
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
  );
}

export default Nav;
