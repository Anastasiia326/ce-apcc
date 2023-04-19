import { useEffect } from "react";

function News () {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="news">
      <h1 className="text-[#333333] text-6xl text-center my-20 font-bold leading-[60px]">News and articles</h1>
      <h3 className="text-[#333333] text-4xl text-center my-20 font-bold leading-[60px]">Coming soon.</h3>
    </div>
  )
}

export default News;