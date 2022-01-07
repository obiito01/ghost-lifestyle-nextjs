import React from "react";
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="overflow-hidden sticky top-0 z-50 h-[70px] w-full bg-neutral-50 text-zinc-700 flex justify-between">
      {/* left logo */}
      <div className="bg-neutral-800 hover:bg-red-500  basis-[25%] duration-500">
        <Link href="/">
          <a className="w-full h-full grid place-items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0014/5145/8619/t/122/assets/logo.svg?v=10601447400248174825"
              alt="Ghost Lifestyle Logo"
              className="w-[70px] "
            />
          </a>
        </Link>
      </div>

      {/* mid links */}
      <div className="flex-1 flex items-center justify-center gap-1 text-neutral-800">
        <Link href="/about">
          <a className="hover:bg-neutral-200  py-4 font-[500] red rounded-xl w-[150px] grid place-items-center duration-500">
            ABOUT
          </a>
        </Link>
        <Link href="/products">
          <a className="hover:bg-neutral-200  py-4 font-[500]  red rounded-xl w-[150px] grid place-items-center duration-500">
            PRODUCTS
          </a>
        </Link>
        <Link href="/lifestyle">
          <a className="hover:bg-neutral-200 py-4 font-[500]  red rounded-xl w-[150px] grid place-items-center duration-500">
            LIFESTYLE
          </a>
        </Link>
      </div>

      {/* Account, cartlogo */}
      <div className="basis-[25%] flex items-center justify-end gap-5 mr-5">
        <Link href="/account">
          <a className="hover:bg-neutral-200  py-4 font-[500]  red rounded-xl w-[150px] grid place-items-center duration-500">
            ACCOUNT
          </a>
        </Link>
        <Link href="/cart">
          <a className="hover:bg-neutral-200  px-4 py-4 font-[500]  red rounded-xl grid place-items-center duration-500">
            <BsFillCartFill size={22} className="text-neutral-800" />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
