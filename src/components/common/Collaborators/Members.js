import MemberCard from "./MemberCard";
import { config } from "./MembersConfig";

function Members() {
  return (
    <div className="collaborators-list mb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-[#333333] text-3xl sm:text-6xl text-center font-bold leading-[54px] mb-8 sm:mb-32">List of Collaborators</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          {
            config.map((item, index) => <MemberCard key={index} path={item.path} name={item.name} location={item.location} collaboration={item.collaboration} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Members;
