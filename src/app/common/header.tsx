"use client";

import Image from "next/image";
import logo from "../assets/images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";

export default function Header() {
  const [isClick, setIsClick] = useState(false)
  return (
    <>
      <div className="w-full relative px-3 py-4 lg:flex max-w-[1350px] 2xl:py-9 lg:py-6 lg:px-5 mx-auto lg:bg-transparent lg:items-center bg-[#252439]">
        <div className="w-full flex justify-between items-center">
          <Image src={logo} alt="logo" className="w-24 lg:w-36 2xl:w-44" />
          {isClick === false && <CiMenuFries className="text-2xl font-extrabold lg:hidden" onClick={() => setIsClick(true)} />}
          {isClick && <MdRestaurantMenu className="text-2xl font-extrabold lg:hidden" onClick={() => setIsClick(false)} />}
        </div>
        {isClick && <div className="w-full absolute left-0 lg:hidden flex py-5 bg-[#252439] px-4 flex-col gap-2">
          <p className="text-lg">Home</p>
          <p className="text-lg">About</p>
          <p className="text-lg">Portfolio</p>
          <p className="text-lg">Service</p>
          <p className="text-lg">Contact</p>
          <p className="text-lg">Blog</p>
          <Button radius="full" className="bg-gradient-to-tr w-fit mt-4 text-lg from-pink-500 to-yellow-500 text-white shadow-lg">
            Download CV
          </Button>
        </div>}
        <div className="hidden lg:flex lg:items-center lg:gap-8 2xl:gap-10 lg:flex-initial">
          <p className="text-md font-bold 2xl:text-lg 2xl:font-semibold">Home</p>
          <p className="text-md font-bold 2xl:text-lg 2xl:font-semibold ">About</p>
          <p className="text-md font-bold 2xl:text-lg 2xl:font-semibold ">Portfolio</p>
          <p className="text-md font-bold 2xl:text-lg 2xl:font-semibold ">Service</p>
          <p className="text-md font-bold 2xl:text-lg 2xl:font-semibold ">Contact</p>
          <p className="text-md font-bold 2xl:text-lg 2xl:font-semibold ">Blog</p>
          <Button radius="full" className="bg-gradient-to-tr w-fit font-bold 2xl:text-lg 2xl:font-semibold 2xl:py-1 2xl:px-6 text-md from-pink-500 to-yellow-500 text-white shadow-lg">
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
}
