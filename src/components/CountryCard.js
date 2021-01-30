import React from "react";
import "./countries.css";

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
    deleteCountry,
  } = props;

  // const [list, setList] = React.useState(initialList);
  // function handleRemove(id) {
  //   const countriesMinusDeleted = list.filter((item) => item.id !== id);
  //   setList(countriesMinusDeleted);
  // }

  return (
    <section className="card-container">
      <div className="flag-container">
        <img src={flag} alt="" />
      </div>
      <h2>{name}</h2>
      <h5>Native name: {nativeName}</h5>
      <h5>
        Capital: <em>{capital}</em>
      </h5>
      <h5>Region: {region}</h5>
      <h5>Sub-Region: {subregion}</h5>
      <h5>Population: {population}</h5>
      <h5>Area: {area}km²</h5>
      <div>
        <h5>Language: {languages && languages[0].name}</h5>
      </div>
      <div className="buttons-container">
        <button className="button" onClick={() => deleteCountry(name)}>
          Remove
        </button>
        <button className="button" onClick={() => deleteCountry(name)}>
          Favorite
        </button>
      </div>
    </section>
  );
}
