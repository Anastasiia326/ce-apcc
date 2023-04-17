import React from "react";
import { Link } from "react-router-dom";

import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
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
              <li><p>Samantha.Khan-Gillmore@ahri.org</p></li>
              <li className="text-white">LOCATION</li>
              <li><p>APHRC Campus, Kitisuru, Nairobi, Kenya</p></li>
            </ul>
          </div>
          <div className="aboutus text-[#D6D6D6] text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-1 mt-12">
            <ul>
              <li><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">About Us</h4></li>
              <li><a href="#">xxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxx</a></li>
            </ul>
          </div>
          <div className="contact text-[#D6D6D6] text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-1 mt-12">
            <ul>
              <li><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Contact</h4></li>
              <li><a href="#">xxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxx</a></li>
            </ul>
          </div>
          <div className="forums text-[#D6D6D6] text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-1 mt-12">
            <ul>
              <li><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Forums</h4></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
              <li><a href="#">xxxxxxxxxxxxxx</a></li>
            </ul>
          </div>
          <div className="help text-[#D6D6D6] text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-1 mt-12">
            <ul>
              <li><h4 className="text-2xl text-[#1BAE70] font-bold mb-3">Help</h4></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Condition</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
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