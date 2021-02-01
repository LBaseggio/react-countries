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
    areaAscending,
    areaDescending,
  } = React.useContext(CountriesContext);
  const [state, setState] = React.useState({
    countrySearch: "",
    selectedCountry: "Show All",
    countryRegion: "Show All",
  });
  // const [count, setCount] = React.useState(0);

  var count = 0;

  return (
    <>
      <section className="grand-container">
        {/* /////////////////////////    FILTERS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <section className="filters-container">
          <span className="flex-container">
            <input
              type="text"
              className="search-country"
              placeholder="Search a country"
              value={state.countrySearch}
              onChange={(event) =>
                setState({
                  ...state,
                  countrySearch: event.target.value.toLowerCase(),
                })
              }
            />

            <select
              className="filter-by-region-select"
              onChange={(event) =>
                setState({ ...state, countryRegion: event.target.value })
              }
              value={state.countryRegion}
            >
              <option> Filter by Region: </option>
              <option> Africa </option>
              <option> Americas </option>
              <option> Asia </option>
              <option> Europe </option>
              <option> Oceania </option>
            </select>

            <select
              className="choose-country-select"
              value={state.selectedCountry}
              onChange={(event) =>
                setState({ ...state, selectedCountry: event.target.value })
              }
            >
              <option> Choose a Country: </option>
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
          </span>
          <br />
          {/* /////////////////////////    FILTER BUTTONS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <span className="flex-container" id="filter-buttons-container">
            <button
              id="button-big-population"
              type="button"
              onClick={() => populationAscending(props.population)}
            >
              BIGGEST <br />
              POPULATION
            </button>

            <button
              id="button-small-population"
              type="button"
              onClick={() => populationDescending(props.population)}
            >
              SMALLEST <br />
              POPULATION
            </button>

            <button
              id="button-big-area"
              type="button"
              onClick={() => areaAscending(props.area)}
            >
              BIGGEST <br />
              AREA
            </button>

            <button
              id="button-small-area"
              type="button"
              onClick={() => areaDescending(props.area)}
            >
              SMALLEST <br />
              AREA
            </button>

            <button
              id="button-reset"
              type="button"
              onClick={(event) =>
                setState({
                  countrySearch: "",
                  countryRegion: "Show All",
                  selectedCountry: "Show All",
                })
              }
            >
              RESET
            </button>
          </span>
        </section>

        {/* /////////////////////////   FAVORITES MAPPING   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {countriesFavoriteList.length ? (
          <div className="favorite-list-text-container">
            <h3 className="favorite-list-text">Favorite Countries</h3>
          </div>
        ) : null}

        <div className="cards-container">
          {countriesFavoriteList.length ? (
            <section className="favorite-cards-grid">
              {countriesFavoriteList.map((country, index) => (
                <CountryCard
                  {...country}
                  key={index}
                  isRemoveFavoriteDisplayed
                />
              ))}
            </section>
          ) : null}

          {/* /////////////////////////   MAPPING   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <div
            className="cards-grid"
            id={`${
              countriesFavoriteList.length
                ? "cards-grid-with-favorite"
                : "cards-grid-without-favorite"
            }`}
          >
            {/* <h1>COUNT: {count}</h1> */}
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
                .filter((countryFilteredByRegion) =>
                  state.countryRegion !== "Show All"
                    ? countryFilteredByRegion.region === state.countryRegion
                    : countryFilteredByRegion
                )
                .map((country, index) => (
                  <CountryCard
                    key={index}
                    {...country}
                    isAddFavoriteDisplayed
                  />
                ))
            ) : (
              <CountryCard
                {...countries.find(
                  (country) => country.name === state.selectedCountry
                )}
                isAddFavoriteDisplayed
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
// .map((country, index, arrayForCount) => {
//                   if (
//                     arrayForCount.length &&
//                     arrayForCount.length - 1 === index
//                   ) {
//                     return (count = index + 1);
//                   }
//                   return (
//                     <CountryCard
//                       key={index}
//                       {...country}
//                       isAddFavoriteDisplayed
//                     />
//                   );
//                 })
