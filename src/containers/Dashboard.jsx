import React, { Component } from 'react';
import Map from '../components/Map';
import Input from '../components/Input';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { authRef } from '../config/firebase';
import history from '../utils/history';

class Dashboard extends Component {
  state = {
    originValue: '',
    destinationValue: '',
    origin: {},
    destination: {},
    showMap: false,
    description: '',
  }

  handleChange = originValue => {
    if (originValue.length === 0) {
      this.setState({
        origin: {},
      })
    }
    this.setState({
      originValue
    });
  }

  handleChange2 = destinationValue => {
    if (destinationValue.length === 0) {
      this.setState({
        destination: {},
      })
    }
    this.setState({
      destinationValue
    });
  }

  handleState = (state, type) => {
    this.setState({
      [type]: state,
    })
  }

  handleSelectOrigin = (originValue) => {
    geocodeByAddress(originValue)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.handleState(latLng, 'origin'))
      .catch(error => console.error('Error', error));
  }

  handleSelectDestination = (destinationValue) => {
    geocodeByAddress(destinationValue)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.handleState(latLng, 'destination'))
      .catch(error => console.error('Error', error));
  }

  handleChangeDesc = (event) => {
    event.preventDefault();
    this.setState({
      description: event.target.value,
    });
  }

  Logout = () => {
    authRef.signOut().then(function() {
      history.push('home');
    })
  }

  componentDidMount = () => {
    authRef.onAuthStateChanged(function (user) {
      if (!user) {
        history.push('login');
      }
    });
  }

  render() {
    const { destinationValue, originValue } = this.state;
    const { destination, origin, description } = this.state;
    return (
      <div className="Dashboard">
        <div className="Dashboard-container">
          <div className="Dashboard-form">
            <div className="Dashboard-header">
              <h2>Create a new service</h2>
              <div className="Logout-button">
                <button onClick={this.Logout}>Logout</button>
              </div>
            </div>
            <Input
              name="description"
              label="Description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={this.handleChangeDesc}
            />
            <PlacesAutocomplete
              value={originValue}
              onChange={this.handleChange}
              onSelect={this.handleSelectOrigin}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Origin',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = 'suggestion-item';
                      const style = { cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <PlacesAutocomplete
              value={destinationValue}
              onChange={this.handleChange2}
              onSelect={this.handleSelectDestination}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Destination',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = 'suggestion-item';
                      const style = { cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <div className="Dashboard-map">
            {origin.lat && destination.lat && (
              <Map
                origin={origin}
                destination={destination}
                originValue={originValue}
                destinationValue={destinationValue}
                description={description}
              />)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;