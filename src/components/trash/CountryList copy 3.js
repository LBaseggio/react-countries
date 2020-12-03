import React from "react";
import CountryCard from "../CountryCard";
import "./countryList.css";
// import axios from "axios";

export default class CountryList extends React.Component {
  state = {
    countries: [],
    selectedCountry: "Show All",
    countrySearch: "",
    countryRegion: "",
    // deleteCountry: false,
    // countriesMinusDeleted: [],
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

  // AXIOS
  // fecthCountries = () => {
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/all`)
  //     .then((response) => {
  //     this.setState({ countries: response.data });
  //     console.log(response.data);
  //   });
  // };

  countrySearchHandler = (event) => {
    this.setState({
      countrySearch: event.target.value,
    });
  };

  handleDelete = (event) => {
    this.setState({ deleteCountry: !this.state.deleteCountry });
  };

  render() {
    return (
      <section className="cardsGridContainer">
        <div>
          <input
            type="text"
            className="searchCountry"
            placeholder="Search a country"
            onChange={this.countrySearchHandler}
          />
          {this.state.countries
            .filter((countryName) =>
              countryName.name.includes(this.state.countrySearch)
            )
            .map((country) => (
              <CountryCard {...country} />
            ))}
        </div>

        <div>
          <label> Filter by Region </label>
          <select
            onChange={(event) =>
              this.setState({ countryRegion: event.target.value })
            }
          >
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
        {/* <button onClick="handleDelete">DELETE</button> */}
        <div id="cardsGrid">
          {this.state.selectedCountry === "Show All" ? (
            this.state.countries
              .filter(
                (countryRegion) =>
                  countryRegion.region === this.state.countryRegion
              )
              .map((country, index) => <CountryCard key={index} {...country} />)
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
