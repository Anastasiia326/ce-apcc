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
        <div className="container footer-main grid grid-cols-2 lg:grid-cols-6 mx-auto px-20 pb-8 mt-10">
          <div className="contact text-[#D6D6D6] text-center lg:text-left col-span-2 lg:col-span-2">
            <ul>
              <li className="mb-4"><img src={logo} alt="" className="m-auto lg:m-0 w-20" /></li>
              <li className="text-white">EMAIL</li>
              <li><p className="mb-4">Samantha.Khan-Gillmore@ahri.org</p></li>
              <li className="text-white">LOCATION</li>
              <li><p className="mb-4">APHRC Campus, Kitisuru, Nairobi, Kenya</p></li>
            </ul>
          </div>
          <div className="contact text-[#D6D6D6] text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-2 mt-12">
            <ul>
              <li className="my-4"><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Contact Info</h4></li>
              <li className="flex flex-row my-4 hover:text-white"><MdLocationOn className="text-2xl text-[#1BAE70] mr-4" /> P.O. Box 10787-00100, Nairobi, Kenya</li>
              <li className="flex flex-row my-4 hover:text-white"><HiPhone className="text-2xl text-[#1BAE70] mr-4" /> +254 722 205 933, 733 410 102</li>
              <li className="flex flex-row my-4 hover:text-white"><HiOutlineMail className="text-2xl text-[#1BAE70] mr-4" /> evidence@cartafrica.org</li>
            </ul>
          </div>
          <div className="aboutus text-[#D6D6D6] text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-1 mt-12">
            <ul>
              <li className="my-4"><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Quick Links</h4></li>
              <li className="my-4"><a href="/home" className="hover:text-[#1BAE70]">Home</a></li>
              <li className="my-4"><a href="/about" className="hover:text-[#1BAE70]">About us</a></li>
              <li className="my-4"><a href="/collaborators" className="hover:text-[#1BAE70]">Collaborators</a></li>
              <li className="my-4"><a href="/contact" className="hover:text-[#1BAE70]">Contact</a></li>
              <li className="my-4"><a href="/forums" className="hover:text-[#1BAE70]">Forums</a></li>
            </ul>
          </div>
          <div className="help text-[#D6D6D6] text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-1 mt-12">
            <ul className="my-4">
              <li className="my-4"><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Help</h4></li>
              <li className="my-4"><a href="#" className="hover:text-[#1BAE70]">Privacy</a></li>
              <li className="my-4"><a href="#" className="hover:text-[#1BAE70]">Condition</a></li>
              <li className="my-4"><a href="#" className="hover:text-[#1BAE70]">Blog</a></li>
              <li className="my-4"><a href="#" className="hover:text-[#1BAE70]">FAQs</a></li>
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