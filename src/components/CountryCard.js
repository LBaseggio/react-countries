import React from "react";
import "./countryCard.css";

export default function CountryCard(props) {
  const {
    name,
    nativeName,
    capital,
    region,
    subregion,
    population,
    area,
    languages,
    flag,
  } = props;

  return (
    <section className="cardContainer">
      {/* <div>
        <img src={flag} alt="" />
      </div> */}
      <h2>Country: {name}</h2>
      <h3>Native name: {nativeName}</h3>
      <h3>
        Capital: <em>{capital}</em>
      </h3>
      <h3>Region: {region}</h3>
      <h3>Sub-Region: {subregion}</h3>
      <h3>Population: {population}</h3>
      <h3>Area: {area}km²</h3>
      {/* <p>Language: {languages[0].name}</p> */}
    </section>
  );
}
