import Map from "../../../assets/images/demo-1.png";
import APCC from "../../../assets/images/APCC.png";

function MapText () {
  return (
    <div className="map-text relative">
      <div className="map"><img src={Map} alt="Africa Map" className="w-full" /></div>
      <img src={APCC} alt="APCC" className="absolute bottom-12" />
    </div>
  )
}

export default MapText;
