import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import "./countries.css";

export default function CountryCard(props) {
  const { countryDelete, countryFavorite } = React.useContext(CountriesContext);

  return (
    <section className="card-container">
      <div className="flag-container">
        <img src={props.flag} alt="" />
      </div>
      <h2>{props.name}</h2>
      <h5>Native name: {props.nativeName}</h5>
      <h5>
        Capital: <em>{props.capital}</em>
      </h5>
      <h5>Region: {props.region}</h5>
      <h5>Sub-Region: {props.subregion}</h5>
      <h5>Population: {props.population}</h5>
      <h5>Area: {props.area}km²</h5>
      <div>
        <h5>Language: {props.languages && props.languages[0].name}</h5>
      </div>
      <div className="buttons-container">
        <button className="button" onClick={() => countryDelete(props.name)}>
          Remove
        </button>
        <button className="button" onClick={() => countryFavorite(props.name)}>
          Favorite
        </button>
      </div>
    </section>
  );
}
