import { useEffect } from "react";
import LatestPublication from "./LatestPublication";

function PublicationDashboard() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <LatestPublication />
    </>
  )
}

export default PublicationDashboard;