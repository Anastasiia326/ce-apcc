import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NewsList from "../common/News/NewsList";

function News() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="news">
      <h1 className="contianer mx-auto text-[#333333] text-3xl sm:text-6xl text-center my-16 font-bold leading-[60px]">News and articles</h1>

      <Outlet />

      <NewsList />

    </div>
  )
}

export default News;