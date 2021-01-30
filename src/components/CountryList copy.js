import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import CountryCard from "./CountryCard";
import "./countries.css";

export default function CountryList() {
  const { countries, deleteCountryHandler } = React.useContext(
    CountriesContext
  );
  const [state, setState] = React.useState({
    selectedCountry: "Show All",
    countrySearch: "",
    countryRegion: "Show All",
    deleteCountry: false,
  });

  return (
    <section className="grand-container">
      <section className="filters-container">
        <div>
          <input
            type="text"
            className="searchCountry"
            placeholder="Search a country"
            value={state.countrySearch}
            onChange={(event) =>
              setState({
                countrySearch: event.target.value.toLowerCase(),
              })
            }
          />
        </div>

        <div className="filterByRegion">
          <label> Filter by Region: </label>

          <select
            onChange={(event) =>
              setState({ countryRegion: event.target.value })
            }
            value={state.countryRegion}
          >
            <option> Show All </option>
            <option> Africa </option>
            <option> Americas </option>
            <option> Asia </option>
            <option> Europe </option>
            <option> Oceania </option>
          </select>
        </div>

        <div className="chooseCountry">
          <label> Choose a Country: </label>
          <select
            className="select"
            value={state.selectedCountry}
            onChange={(event) =>
              setState({ selectedCountry: event.target.value })
            }
          >
            <option> Show All </option>
            <option disabled> -- Select -- </option>
            {countries
              .filter((countriesFilteredByRegion) =>
                state.countryRegion !== "Show All"
                  ? countriesFilteredByRegion.region === state.countryRegion
                  : countriesFilteredByRegion
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
            setState({
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
          {state.selectedCountry === "Show All" ? (
            countries
              .filter((countryName) =>
                state.countrySearch !== ""
                  ? countryName.name
                      .toLowerCase()
                      /*.includes */ .startsWith(state.countrySearch)
                  : countryName
              )
              .filter((countriesFilteredByRegion) =>
                state.countryRegion !== "Show All"
                  ? countriesFilteredByRegion.region === state.countryRegion
                  : countriesFilteredByRegion
              )
              .map((country, index) => (
                <CountryCard
                  key={index}
                  {...country}
                  deleteCountry={deleteCountryHandler}
                />
              ))
          ) : (
            <CountryCard
              {...countries.find(
                (country) => country.name === state.selectedCountry
              )}
              deleteCountry={deleteCountryHandler}
            />
          )}
        </div>
      </div>
    </section>
  );
}

// add to favorite
// order by population name
// order by size
//
