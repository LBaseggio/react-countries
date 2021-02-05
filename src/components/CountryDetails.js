import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { Link } from "react-router-dom";
import "./CSS/styling.css";

export default function CountryDetails(props) {
  const {
    countries,
    removeCountryFromFavorites,
    addCountryToFavorites,
  } = React.useContext(CountriesContext);

  return (
    <section id="grand-container">
      {countries &&
        countries
          .filter(
            (country) => props.match.params.name === country.name && country
          )
          .map((item) => (
            <section className="grand-card-details-container">
              <div className="flag-details-container">
                <img src={item.flag} alt="flag" className="flag" />
              </div>

              <div className="card-details-container">
                <h2>{item.name}</h2>
                <h5>
                  <strong>Native name: </strong>
                  {item.nativeName}
                </h5>
                <h5>
                  <strong>Capital: </strong>
                  {item.capital}
                </h5>
                <h5>
                  <strong>Region: </strong>
                  {item.region}
                </h5>
                <h5>
                  <strong>Sub-Region: </strong>
                  {item.subregion}
                </h5>
                <h5>
                  <strong>Population: </strong>
                  {item.population}
                </h5>
                <h5>
                  <strong>Demonym: </strong>
                  {item.demonym}
                </h5>
                <h5>
                  <strong>Area: </strong>
                  {item.area}km²
                </h5>
                <h5>
                  <strong>Languages:</strong>
                  {item.languages.map((item) => (
                    <span>{item.name}</span>
                  ))}
                </h5>
                {/* <h5>
                  <strong>Translations:</strong>
                  {Object.keys(item.translations).map(function (key, index) {
                    console.log("translations:", item.translations);
                    return <span>{item.translations[index]}</span>;
                  })}
                </h5> */}
                <h5>
                  <strong>Translations:</strong>
                  {Object.keys(item.translations).map(
                    (element) => `${element} | ${item.translations[element]}`
                  )}
                </h5>

                {/* console.log(Object.keys(translations))
                console.log(Object.values(translations))
                console.log(Object.keys(translations).map(item =>(item,
                translations[item]))); */}
                <h5>
                  <strong>Currencies:</strong>
                </h5>
                {item.currencies.map((item) => (
                  <span>{item.name}</span>
                ))}
                <h5>
                  <strong>Border Countries:</strong>
                </h5>
                {item.borders.map((item) => (
                  <span>{item}</span>
                ))}
                <h5>
                  <strong>Timezones:</strong>
                </h5>
                {item.timezones.map((item) => (
                  <span>{item}</span>
                ))}
                <div id="buttons-details-container">
                  {props.isRemoveFavoriteDisplayed ? (
                    <button
                      type="button"
                      className="button"
                      onClick={() => removeCountryFromFavorites(props.name)}
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
              </div>
            </section>
          ))}
    </section>
  );
}

// https://restcountries.eu/rest/v2/all

// var myObject = { a: 1, b: 2, c: 3 };
// Object.keys(myObject).map(function (key, index) {
//   myObject[key] *= 2;
// });
// console.log(myObject);
