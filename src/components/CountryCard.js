import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { Link, useHistory } from "react-router-dom";
import "./styling.css";

export default function CountryCard(props) {
  const {
    addCountryToFavorites,
    removeCountryFromFavorites,
    countries,
    setCountries,
  } = React.useContext(CountriesContext);

  function numberWithSeparators(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <section className="card-container">
      <div className="flag-container">
        <img src={props.flag} alt="flag" />
      </div>
      <h2>{props.name}</h2>
      <h5>Native name: {props.nativeName}</h5>
      <h5>Capital: {props.capital}</h5>
      <h5>Region: {props.region}</h5>
      <h5>Sub-Region: {props.subregion}</h5>
      {props.population !== null ? (
        <h5>Population: {numberWithSeparators(props.population)}</h5>
      ) : null}
      {props.area !== null ? (
        <h5>Area: {numberWithSeparators(props.area)}km²</h5>
      ) : null}
      <h5>Language: {props.languages && props.languages[0].name}</h5>
      <div className="buttons-container">
        {props.isRemoveFavoriteDisplayed ? (
          <button
            type="button"
            id="button-card"
            onClick={() => removeCountryFromFavorites(props.name)}
          >
            Remove
          </button>
        ) : null}
        {props.isAddFavoriteDisplayed ? (
          <button
            type="button"
            id="button-card"
            onClick={() => addCountryToFavorites(props.name)}
          >
            Favorite
          </button>
        ) : null}
        <button id="button-card" type="button">
          <Link
            to={`/${props.name}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Details
          </Link>
        </button>
      </div>
    </section>
  );
}
