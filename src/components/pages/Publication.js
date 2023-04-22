import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import PublicationsList from "../common/Publication/PublicationsList";

function Publication() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="publication">
      <h1 className="contianer mx-auto text-[#333333] text-3xl sm:text-6xl text-center my-16 font-bold leading-[60px]">Useful Publication</h1>

      <Outlet />

      <PublicationsList />
    </div>
  )
}

export default Publication;