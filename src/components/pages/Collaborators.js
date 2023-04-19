import { useEffect } from "react";
import CoLeads from "../common/Collaborators/CoLeads";
import Members from "../common/Collaborators/Members";

function Collaborators () {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="collaborators">
      <CoLeads />
      <Members />
    </div>
  )
}

export default Collaborators;