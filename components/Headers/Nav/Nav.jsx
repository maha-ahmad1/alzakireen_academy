"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Nav() {
  const pathname  = usePathname();

  return (
    <>
      <li className={"" == pathname.split("/")[1] ? "current" : ""}>
        <Link href={`/`}>Home</Link>
      </li>
      <li className={"about-us" == pathname.split("/")[1] ? "current" : ""}>
        <Link href={"/about-us"}>About Us</Link>
      </li>
      <li className={"contact" == pathname.split("/")[1] ? "current" : ""}>
        <Link href={`/contact`}>Contact</Link>
      </li>
    </>
  );
}
