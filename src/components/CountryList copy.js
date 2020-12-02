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

  handleOnChange = (event) => {
    this.setState({ countrySelectChange: !this.state.countrySelectChange });
  };

  render() {
    return (
      <section className="cardsGridContainer">
        <label> Choose a Country: </label>
        <select>
          {this.state.countries.map((country, index) => (
            <option
              className="cardsGrid"
              key={index}
              onChange={this.countrySelectChange}
              value="null"
            >
              {country.name}
            </option>
          ))}
        </select>

        <select
          value={this.state.selectedCountry}
          onChange={(event) =>
            this.setState({ selectedCountry: event.target.value })
          }
        >
          {this.state.countries.map((country) => (
            <option key={team.value} value={team.value}>
              {team.display}
            </option>
          ))}
        </select>

        <CountryCard />
      </section>
    );
  }
}
