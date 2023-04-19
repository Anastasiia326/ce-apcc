function MemberCard ({path, name, location, collaboration}) {
  return (
    <div className="w-full min-h-72 bg-[#DDF3EA] rounded-xl p-4">
      <div className="flex flex-row items-center mb-6">
        <img src={path} alt="MEMBER" className="rounded-xl"/>
        <h3 className="text-[#333333] text-xl sm:text-2xl font-bold leading-[30px] sm:leading-[54px] ml-6">{name}</h3>
      </div>
      <div className="px-0 sm:px-4">
        <p className="text-[#333333] text-lg sm:text-xl font-normal leading=[54px] tracking-wide">{location}</p>
        <p className="text-[#333333] text-lg sm:text-xl font-normal leading=[54px] tracking-wide">{collaboration}</p>
      </div>
    </div>
  )
}

export default MemberCard;