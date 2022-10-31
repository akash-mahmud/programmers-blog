import urls from "@/config/urls";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/images/logo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href={urls.home}>
        <div className="flex items-center cursor-pointer">
          <Image src={logo} alt="logo" height={35} width={40} />
          <span className="font-blod ml-2 text-primary">Programmer's blog</span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <Link href="/products">Products</Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link href="/products">Pricing</Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link href="/products">Docs</Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link href="/products">Company</Link>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <Link href="#" className="hover:text-gray-400">
            Log in
          </Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link
            href="#"
            className="bg-primary py-2 px-4 rounded-sm text-white
          hover:bg-primary-dark transition-all
          "
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
