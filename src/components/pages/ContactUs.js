import MapImage from "../../assets/images/map.png";

function ContactUs () {
  return (
    <div className="contact-us">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 px-4">
        <div className="mb-[120px]">
          <h1 className="text-[#333333] text-6xl text-center font-bold leading-[54px] mb-14">Contact us</h1>
          <div className="bg-[#DDF3EA] rounded-2xl px-5 py-3">
            <h3 className="text-[#333333] text-3xl text-center font-bold leading-[54px] mb-4.5">You can find us at</h3>
            <h6 className="text-[#656565] text-base leading-[30px]">EMAIL</h6>
            <p className="text-[#333333] text-xl leading-[30px] mb-6">Samantha.Khan-Gillmore@ahri.org</p>
            <h6 className="text-[#656565] text-base leading-[30px]">PHONE NUMBER</h6>
            <p className="text-[#333333] text-xl leading-[30px] mb-6">+254 (20) 400 1000, 266 2244 or 266 2255</p>
            <h6 className="text-[#656565] text-base leading-[30px]">LOCATION</h6>
            <p className="text-[#333333] text-xl leading-[30px] mb-6">APHRC Campus, Kitisuru, Nairobi, Kenya</p>
          </div>

          <div className="pt-[54px]">
            <h3 className="text-3xl text-[#333333] text-center font-bold leading-[54px] my-2">Let's get in touch</h3>
            <input type="text" name="name" placeholder="Your Name" className="w-full border border-solid border-slate-400 my-2.5 px-5 py-1 text-xl leading-[54px]" />
            <input type="text" name="mail" placeholder="Your Mail" className="w-full border border-solid border-slate-400 my-2.5 px-5 py-1 text-xl leading-[54px]" />
            <textarea name="message" placeholder="Message" className="w-full h-auto border border-solid border-slate-400 my-2.5 px-5 py-1 text-xl leading-[40px]" />
            <button type="button" className="bg-[#1BAE70] rounded-xl text-white text-xl text-center leading-[54px] py-1 px-8">Send Message</button>
          </div>
        </div>
        <div className="google-map mb-[120px]">
          <img src={MapImage} alt="Google Map" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
