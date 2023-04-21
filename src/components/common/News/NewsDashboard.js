import { useEffect } from "react";
import LatestNews from "./LatestNews";

function NewsDashboard() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <LatestNews />
    </>
  )
}

export default NewsDashboard;