import React from "react";
import style from "@/styles/footer/footer.module.css";
import logo from "@/public/Home/shape.png";
import Image from "next/image";
import complogo from "@/public/footer/newLogo.jpg";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa6";
const SearchpadLogo = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="10" height="10" fill="white" />
    <rect y="14" width="10" height="10" fill="white" />
    <rect x="14" width="10" height="10" fill="white" />
    <rect x="14" y="14" width="10" height="10" fill="white" />
  </svg>
);

const SocialIcon = ({ d }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={d} fill="currentColor" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c]  py-16 px-[10rem]">
      <div className="container px-18 mx-auto">
        <div className="flex justify-between  items-start mb-12">
          <div className="flex-shrink-0 flex gap-1">
            <Image src={logo} alt={logo} width={40} />
            <span className="text-[33.93px] font-[500] text-white">
              Searchpad
            </span>
          </div>
          <div className=" flex justify-center gap-[2rem]">
            <div className="">
              <h3 className="text-[16px] font-[400] text-white mb-4">
                AI Tools
              </h3>
              <ul className={`${style.listItem} text-[#686567] leading-10`}>
                <li>Image Creation</li>
                <li>Voiceover</li>
                <li>Document Creation</li>
                <li>Ad Creative</li>
                <li>Slide Creation</li>
              </ul>
            </div>
            <div className="mr-16">
              <h3 className="text-lg font-semibold text-white mb-4 invisible">
                AI Tools
              </h3>
              <ul className={`${style.listItem} text-[#686567] leading-10`}>
                <li>Video Creation</li>
                <li>Idea Generation</li>
                <li>Graphic Design</li>
                <li>Website UI</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            <div className={`flex gap-[9rem]`}>
              <div className={``}>
                <h3 className="text-[16px] font-[400] text-white mb-4">
                  Product
                </h3>
                <ul className={`${style.listItem} text-[#686567] leading-10`}>
                  <li>API</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className={` `}>
                <h3 className="text-[16px] font-[400] text-white mb-4">
                  Product
                </h3>
                <ul className={`${style.listItem} text-[#686567] leading-10`}>
                  <li>API</li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-14 ">
          <p className="text-sm">Searchpad ©. All rights reserved.</p>
          <div className="flex space-x-6">
            <RiFacebookBoxLine className="w-[24px] h-[24px]" />{" "}
            <FaXTwitter className="w-[24px] h-[24px]" />{" "}
            <CiLinkedin className="w-[24px] h-[24px]" />
            <FaTiktok className="w-[24px] h-[24px]" />
            <TbBrandTelegram className="w-[24px] h-[24px]" />{" "}
            <CiYoutube className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
