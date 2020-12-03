import React from "react";
import CountryCard from "./CountryCard";
import "./countryList.css";
// import axios from "axios";

export default class CountryList extends React.Component {
  state = {
    countries: [],
    selectedCountry: "Show All",
    countrySearch: "",
    countryRegion: "Show All",
    deleteCountry: false,
    // countriesMinusDeleted: [],
  };

  // this.baseState = this.state

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
      <section className="cardsGridContainer">
        <button
          onClick={(event) =>
            this.setState({
              // countries: O MELHOR A FAZER PARA RESETAR E NÃO MENSIONAR COUNTRIES PORQUE J´A FOI MAPEADO EM COMPENTDIDMOUNT,
              selectedCountry: "Show All",
              countrySearch: "",
              countryRegion: "Show All",
            })
          }
        >
          RESET
        </button>

        <div>
          <input
            type="text"
            className="searchCountry"
            placeholder="Search a country"
            onChange={(event) =>
              this.setState({ countrySearch: event.target.value.toLowerCase() })
            }
          />
        </div>

        <div>
          <label> Filter by Region </label>

          <select
            onChange={(event) =>
              this.setState({ countryRegion: event.target.value })
            }
          >
            <option> Show All </option>
            <option> Africa </option>
            <option> Americas </option>
            <option> Asia </option>
            <option> Europe </option>
            <option> Oceania </option>
          </select>
        </div>

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
            .filter((countryRegion) =>
              this.state.countryRegion !== "Show All"
                ? countryRegion.region === this.state.countryRegion
                : countryRegion
            )
            .map((country, index) => (
              <option value={country.name} key={index}>
                {country.name}
              </option>
            ))}
        </select>

        <div id="cardsGrid">
          {this.state.selectedCountry === "Show All" ? (
            this.state.countries
              .filter((countryName) =>
                this.state.countrySearch !== ""
                  ? countryName.name
                      .toLowerCase()
                      .includes(this.state.countrySearch)
                  : countryName
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
      </section>
    );
  }
}
