import React from "react";
import CountryCard from "./CountryCard";
import "./countries.css";
// import axios from "axios";

export default class CountryList extends React.Component {
  state = {
    countries: [],
    selectedCountry: "Show All",
    countrySearch: "",
    countryRegion: "Show All",
    deleteCountry: false,
  };

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ countries: response });
        console.log(response);
      });
  };

  // AXIOS
  // fetchCountries = () => {
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/all`)
  //     .then((response) => {
  //     this.setState({ countries: response.data });
  //     console.log(response.data);
  //   });
  // };

  deleteCountryHandler = (name) => {
    console.log(name);
    const newCountryList = this.state.countries.filter(
      (country) => country.name !== name
    );
    console.log(newCountryList);
    this.setState({ countries: newCountryList });
  };
  render() {
    return (
      <section className="grand-container">
        <section className="filters-container">
          <div>
            <input
              type="text"
              className="searchCountry"
              placeholder="Search a country"
              value={this.state.countrySearch}
              onChange={(event) =>
                this.setState({
                  countrySearch: event.target.value.toLowerCase(),
                })
              }
            />
          </div>

          <div className="filterByRegion">
            <label> Filter by Region: </label>

            <select
              onChange={(event) =>
                this.setState({ countryRegion: event.target.value })
              }
              value={this.state.countryRegion}
            >
              <option value="Show All"> Show All </option>
              <option value="Africa"> Africa </option>
              <option value="Americas"> Americas </option>
              <option value="Asia"> Asia </option>
              <option value="Europe"> Europe </option>
              <option value="Oceania"> Oceania </option>
            </select>
          </div>

          <div className="chooseCountry">
            <label> Choose a Country: </label>
            <select
              className="select"
              value={this.state.selectedCountry}
              onChange={(event) =>
                this.setState({ selectedCountry: event.target.value })
              }
            >
              <option> Show All </option>
              <option disabled> -- Select -- </option>
              {this.state.countries
                .filter((countryFilteredByRegion) =>
                  this.state.countryRegion !== "Show All"
                    ? countryFilteredByRegion.region ===
                      this.state.countryRegion
                    : countryFilteredByRegion
                )
                .map((country, index) => (
                  <option value={country.name} key={index}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>

          <button
            id="reset-button"
            onClick={(event) =>
              this.setState({
                selectedCountry: "Show All",
                countrySearch: "",
                countryRegion: "Show All",
              })
            }
          >
            RESET
          </button>
        </section>
        <div className="cards-container">
          <div id="cards-grid">
            {this.state.selectedCountry === "Show All" ? (
              this.state.countries
                .filter((countryName) =>
                  this.state.countrySearch !== ""
                    ? countryName.name
                        .toLowerCase()
                        /*.includes */ .startsWith(this.state.countrySearch)
                    : countryName
                )
                .filter((countryFilteredByRegion) =>
                  this.state.countryRegion !== "Show All"
                    ? countryFilteredByRegion.region ===
                      this.state.countryRegion
                    : countryFilteredByRegion
                )
                .map((country, index) => (
                  <CountryCard
                    key={index}
                    {...country}
                    deleteCountry={this.deleteCountryHandler}
                  />
                ))
            ) : (
              <CountryCard
                {...this.state.countries.find(
                  (country) => country.name === this.state.selectedCountry
                )}
                deleteCountry={this.deleteCountryHandler}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}

// add to favorite
// order by population name
// order by size
//
