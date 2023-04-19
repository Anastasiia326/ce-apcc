import React from "react";
import { Link } from "react-router-dom";

import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { HiPhone, HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

import logo from "../../assets/images/logo.svg";

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="container footer-main grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-16 mx-auto px-8 sm:px-20 pb-8 mt-10">
          <div className="contact text-[#D6D6D6] text-center lg:text-left col-span-1 lg:col-span-2">
            <ul>
              <li className="mb-4"><img src={logo} alt="" className="m-auto lg:m-0 w-20 mb-8" /></li>
              <li className="text-[#D6D6D6] leading-[24px] mb-4 break-all">The aim of CE-APCC is to create a transformational capability and forum on population-based cohorts, bringing together a broad spectrum of stakeholder to co-create an APCC and support for its eventual implementation and sustenance</li>
            </ul>
          </div>
          <div className="contact text-[#D6D6D6] text-center lg:text-left col-span-1 lg:col-span-2 mt-12">
            <ul>
              <li className="my-4"><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Contact Info</h4></li>
              <li className="flex flex-row justify-center lg:justify-start my-4 hover:text-white"><MdLocationOn className="text-2xl text-[#1BAE70] mr-4" /> P.O. Box 10787-00100, Nairobi, Kenya</li>
              <li className="flex flex-row justify-center lg:justify-start my-4 hover:text-white"><HiPhone className="text-2xl text-[#1BAE70] mr-4" /> +254 722 205 933, 733 410 102</li>
              <li className="flex flex-row justify-center lg:justify-start my-4 hover:text-white"><HiOutlineMail className="text-2xl text-[#1BAE70] mr-4" /> Kobus.herbst@mrc.ac.za</li>
            </ul>
          </div>
          <div className="aboutus text-[#D6D6D6] text-center lg:text-left col-span-1 mt-12">
            <ul>
              <li className="my-4"><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Quick Links</h4></li>
              <li className="my-4"><a href="/home" className="hover:text-[#1BAE70]">Home</a></li>
              <li className="my-4"><a href="/about" className="hover:text-[#1BAE70]">About us</a></li>
              <li className="my-4"><a href="/aim" className="hover:text-[#1BAE70]">Aim and objectives</a></li>
              <li className="my-4"><a href="/collaborators" className="hover:text-[#1BAE70]">Collaborators</a></li>
              <li className="my-4"><a href="/contact" className="hover:text-[#1BAE70]">Contact</a></li>
              {/* <li className="my-4"><a href="/forums" className="hover:text-[#1BAE70]">Forums</a></li> */}
            </ul>
          </div>
          <div className="help text-[#D6D6D6] text-center lg:text-left col-span-1 mt-12">
            <ul className="my-4">
              <li className="my-4"><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Resouces</h4></li>
              <li className="my-4"><a href="/news" className="hover:text-[#1BAE70]">News and articles</a></li>
              <li className="my-4"><a href="/publication" className="hover:text-[#1BAE70]">Useful publications</a></li>
              <li className="my-4"><a href="/cohorts" className="hover:text-[#1BAE70]">African Cohorts</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-20 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-solid py-4 border-[#D6D6D6]">
            <p className="text-white my-2">Copyright&copy;2023 CE-APCC</p>
            <div className="social-list flex justify-center lg:justify-end items-center my-2">
              <Link to="#" className="text-[#555E68] bg-transparent hover:text-[#1BAE70] mx-2"><BsFacebook className="text-xl"/></Link>
              <Link to="#" className="text-[#555E68] bg-transparent hover:text-[#1BAE70] mx-2"><BsInstagram className="text-xl"/></Link>
              <Link to="#" className="text-[#555E68] bg-transparent hover:text-[#1BAE70] mx-2"><FaTwitter className="text-xl"/></Link>
              <Link to="#" className="text-[#555E68] bg-transparent hover:text-[#1BAE70] mx-2"><BsYoutube className="text-xl"/></Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;