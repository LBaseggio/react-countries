import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { Link } from "react-router-dom";
import "./styling.css";

export default function CountryDetails(props) {
  const {
    countries,
    removeCountryToFavorites,
    addCountryToFavorites,
  } = React.useContext(CountriesContext);

  return (
    <div>
      {countries &&
        countries
          .filter(
            (country) => props.match.params.name === country.name && country
          )
          .map((item) => (
            <section className="grand-card-details-container">
              <span className="card-details-container">
                <div className="flag-details-container">
                  <img src={item.flag} alt="flag" />
                </div>
                <h2>{item.name}</h2>
                <h5>Native name: {item.nativeName}</h5>
                <h5>Capital: {item.capital}</h5>
                <h5>Region: {item.region}</h5>
                <h5>Sub-Region: {item.subregion}</h5>
                <h5>Population: {item.population}</h5>
                <h5>Area: {item.area}km²</h5>
                <h5>Language: {item.languages && item.languages[0].name}</h5>
                <div id="buttons-details-container">
                  {props.isRemoveFavoriteDisplayed ? (
                    <button
                      type="button"
                      className="button"
                      onClick={() => removeCountryToFavorites(props.name)}
                    >
                      Remove
                    </button>
                  ) : null}
                  {props.isAddFavoriteDisplayed ? (
                    <button
                      type="button"
                      className="button"
                      onClick={() => addCountryToFavorites(props.name)}
                    >
                      Favorite
                    </button>
                  ) : null}
                  <Link to="/" id="button-return">
                    Return
                  </Link>
                </div>
              </span>
            </section>
          ))}
    </div>
  );
}
