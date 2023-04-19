import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { useState } from 'react';

function GoogleMap(props) {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  }

  const onClose = () => {
    if (this.state.showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <div className="container mx-auto google-map">
      <Map
        className="relative"
        google={props.google}
        zoom={6}
        style={{ position: "relative", width: "auto", height: "900px" }}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      >
        <Marker
          onClick={onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API_KEY
})(GoogleMap);
