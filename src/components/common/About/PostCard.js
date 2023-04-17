function PostCard ({path, title, description}) {
  return (
    <div className="post-card">
      <div className="rounded-lg">
        <img src={path} alt="Stage 1" className="rounded-lg bg-[#DDF3EA] w-full h-auto" />
      </div>
      <h3 className="text-[#333333] text-2xl leading-[54px] font-bold mt-5 mb-2.5">{title}</h3>
      <p className="text-[#333333] text-xl leading-[30px] tracking-tight">{description}</p>
    </div>
  )
}

export default PostCard;