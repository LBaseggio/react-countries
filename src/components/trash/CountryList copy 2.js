import React from "react";
import CountryCard from "./CountryCard";
import "./countryList.css";
// import axios from "axios";

export default class CountryList extends React.Component {
  state = {
    countries: [],
    selectedCountry: "",
  };

  componentDidMount() {
    this.fecthCountries();
  }

  fecthCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ countries: response });
        // console.log(response);
      });
  };

  // fecthCountries = () => {
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/all`)
  //     .then((response) => {
  //     this.setState({ countries: response.data });
  //     console.log(response.data);
  //   });
  // };

  render() {
    return (
      <section className="cardsGridContainer">
        <label> Choose a Country: </label>
        <select
          className="select"
          value={this.state.selectedCountry}
          onChange={(event) =>
            this.setState({ selectedCountry: event.target.value })
          }
        >
          <option /* value={this.state.countries} */> Show All </option>
          {this.state.countries.map((country, index) => (
            <CountryCard key={index} {...country} />
          ))}

          <option disabled> -- Select -- </option>
          {this.state.countries.map((country, index) => (
            <option value={country.name} key={index}>
              {country.name}
            </option>
          ))}
        </select>

        <div id="cardsGrid">
          {this.state.selectedCountry === "" ? (
            this.state.countries.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))
          ) : (
            <CountryCard
              {...this.state.countries.find(
                (country) => country.name === this.state.selectedCountry
              )}
            />
          )}
        </div>
      </section>
    );
  }
}
