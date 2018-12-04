import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8brpUwCDdc8bMjBnGqgZvuW0nobn2Jho&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      const DistanceService = new window.google.maps.DistanceMatrixService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(41.8507300, -87.6512600),
        destination: new window.google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });

      DistanceService.getDistanceMatrix({
        origins: [new window.google.maps.LatLng(41.8507300, -87.6512600)],
        destinations: [new window.google.maps.LatLng(41.8525800, -87.6514100)],
        travelMode: window.google.maps.TravelMode.DRIVING,
        avoidHighways: false,
        avoidTolls: false,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      },
        (result, status) => {
          console.log(result);
          console.log(status);
        }
      );
    }
  })
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.8507300, lng: -87.6512600 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 41.8507300, lng: -87.6512600 }} />}
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
)

export default Map;