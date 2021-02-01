import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import CountryCard from "./CountryCard";
import "./styling.css";

export default function CountryList(props) {
  const {
    countries,
    countriesFavoriteList,
    populationAscending,
    populationDescending,
  } = React.useContext(CountriesContext);
  const [state, setState] = React.useState({
    countrySearch: "",
    selectedCountry: "Show All",
    countryRegion: "Show All",
    countriesPopulationAscending: false,
    // countriesFilterSmallPopulation: false,
    // countriesFilterBigPopulation: false,
    toogle: true,
  });

  return (
    <>
      <section className="grand-container">
        {/* /////////////////////////    FILTERS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <section className="filters-container">
          <div>
            <input
              type="text"
              className="searchCountry"
              placeholder="Search a country"
              value={state.countrySearch}
              onChange={(event) =>
                setState({
                  ...state,
                  countrySearch: event.target.value.toLowerCase(),
                })
              }
            />
          </div>

          <div className="filterByRegion">
            <label> Filter by Region: </label>
            <select
              className="filterByRegion-select"
              onChange={(event) =>
                setState({ ...state, countryRegion: event.target.value })
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
                setState({ ...state, selectedCountry: event.target.value })
              }
            >
              <option> Show All </option>
              <option disabled> -- Select -- </option>
              {countries &&
                countries
                  .filter((countryFilteredByRegion) =>
                    state.countryRegion !== "Show All"
                      ? countryFilteredByRegion.region === state.countryRegion
                      : countryFilteredByRegion
                  )
                  .map((country, index) => (
                    <option value={country.name} key={index}>
                      {country.name}
                    </option>
                  ))}
            </select>
          </div>

          {/* <button
            id="button-big-population"
            type="button"
            onClick={(event) =>
              setState({
                ...state,
                countriesFilterBigPopulation: !state.countriesFilterBigPopulation;
                populationAscending,
              })
            }
          >
            {state.countriesFilterBigPopulation
              ? "REMOVE FILTER"
              : "MOST POPULATED COUNTRIES"}
          </button> */}

          <button
            id="button-big-population"
            type="button"
            onClick={() => populationAscending(props.population)}
          >
            SORT BY BIGGEST POPULATION
          </button>

          <button
            id="button-small-population"
            type="button"
            onClick={() => populationDescending(props.population)}
          >
            SORT BY SMALLEST POPULATION
          </button>

          {/* <button
            id="button-small-population"
            type="button"
            onClick={(event) =>
              setState({
                ...state,
                countriesFilterSmallPopulation: !state.countriesFilterSmallPopulation,
              })
            }
          >
            {state.countriesFilterSmallPopulation
              ? "REMOVE FILTER"
              : "LEAST POPULATED COUNTRIES"}
          </button> */}
          <button
            id="button-reset"
            type="button"
            onClick={(event) =>
              setState({
                selectedCountry: "Show All",
                countrySearch: "",
                countryRegion: "Show All",
                countriesPopulationAscending: false,
              })
            }
          >
            RESET
          </button>
        </section>

        {/* /////////////////////////   MAPPING   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <div className="cards-container">
          {countriesFavoriteList.length ? (
            <section className="favorite-cards-grid">
              <div>
                <span>
                  <h3>Favorite Countries</h3>
                  {countriesFavoriteList.map((country, index) => (
                    <CountryCard
                      {...country}
                      key={index}
                      isRemoveCountryDisplayed
                    />
                  ))}
                </span>
              </div>
            </section>
          ) : null}

          <div className="cards-grid">
            {state.selectedCountry === "Show All" ? (
              countries &&
              countries
                .filter((countryName) =>
                  state.countrySearch !== ""
                    ? countryName.name
                        .toLowerCase()
                        .startsWith(state.countrySearch)
                    : countryName
                )
                .filter((countryFilteredByRegion) =>
                  state.countryRegion !== "Show All"
                    ? countryFilteredByRegion.region === state.countryRegion
                    : countryFilteredByRegion
                )
                .filter((countriesPerHighPopulation) =>
                  state.countriesFilterBigPopulation
                    ? props.populationAscending
                    : countriesPerHighPopulation
                )
                .filter((countryScarcelyPopulated) =>
                  state.countriesFilterSmallPopulation
                    ? countryScarcelyPopulated.population <= 5000
                    : countryScarcelyPopulated
                )
                .filter((countryFilteredByRegion) =>
                  state.countryRegion !== "Show All"
                    ? countryFilteredByRegion.region === state.countryRegion
                    : countryFilteredByRegion
                )
                .map((country, index) => (
                  <CountryCard key={index} {...country} isAddCountryDisplayed />
                ))
            ) : (
              <CountryCard
                {...countries.find(
                  (country) => country.name === state.selectedCountry
                )}
                isAddCountryDisplayed
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* .sort(function (countryA, countryB) { countryA.population - countryB.population }; */
}

//  .sort(function(countryA, countryB) => {
//                 (countryA.population - countryB.population)
//               }
