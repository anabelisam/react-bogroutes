import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

const Map = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `80%`, width: `100%` }} />,
  }),
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      const DistanceService = new window.google.maps.DistanceMatrixService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(this.props.origin.lat, this.props.origin.lng),
        destination: new window.google.maps.LatLng(this.props.destination.lat, this.props.destination.lng),
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
        origins: [new window.google.maps.LatLng(this.props.origin.lat, this.props.origin.lng)],
        destinations: [new window.google.maps.LatLng(this.props.destination.lat, this.props.destination.lng)],
        travelMode: window.google.maps.TravelMode.DRIVING,
        avoidHighways: false,
        avoidTolls: false,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      },
        (result, status) => {
          this.setState({
            originAddresses: result.originAddresses,
            destinationAddresses: result.destinationAddresses,
            distance: result.rows[0].elements[0].distance.text,
            duration: result.rows[0].elements[0].duration.text,
          })
        }
      );
    }
  })
)((props) =>
  <div>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 4.624335, lng: -74.063644 }}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
    <div className="sub-information">
      Tiempo promedio de viaje es <strong>{props.duration}</strong> con <strong>{props.distance}</strong> entre <strong>{props.originValue} ({props.originAddresses})</strong> y <strong>{props.destinationValue} ({props.destinationAddresses})</strong>
    </div>
  </div>
)

export default Map;