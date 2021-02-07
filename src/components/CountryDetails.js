import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { Link } from "react-router-dom";
import "./CSS/stylingDetails.css";

export default function CountryDetails(props) {
  const {
    countries,
    removeCountryFromFavorites,
    addCountryToFavorites,
  } = React.useContext(CountriesContext);

  function numberWithSeparators(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <section id="grand-container">
      {countries &&
        countries
          .filter(
            (country) => props.match.params.name === country.name && country
          )
          .map((item) => (
            <section className="grand-card-details-container">
              <div id="flag-details-container">
                <img src={item.flag} alt="flag" className="flag" />
              </div>

              <div id="card-details-container">
                <h2>{item.name}</h2>

                <h5>
                  <b>Native name: </b>
                  {item.nativeName}
                </h5>

                <h5>
                  <b>Translations:</b>
                  <span className="map-translations">
                    {Object.keys(item.translations).map(
                      (element) => `${element} , ${item.translations[element]}`
                    )}
                  </span>
                </h5>

                <h5>
                  <b>Capital: </b>
                  {item.capital}
                </h5>

                <h5>
                  <b>Demonym: </b>
                  {item.demonym}
                </h5>

                <h5>
                  <b>Region: </b>
                  {item.region}
                </h5>

                <h5>
                  <b>Sub-Region: </b>
                  {item.subregion}
                </h5>

                {item.population !== null ? (
                  <h5>
                    <b>Population: </b>
                    {numberWithSeparators(item.population)}
                  </h5>
                ) : null}

                {item.area !== null ? (
                  <h5>
                    <b>Area: </b>
                    {numberWithSeparators(item.area)}km²
                  </h5>
                ) : null}

                <h5>
                  <b>Languages: </b>
                  {item.languages.map((item) => (
                    <span className="map-languages">{item.name}</span>
                  ))}
                </h5>

                <h5>
                  <b>Currencies: </b>
                  {item.currencies.map((item) => (
                    <span className="map-currencies">{item.name}</span>
                  ))}
                </h5>

                {item.borders !== null ? (
                  <h5>
                    <b>Border Countries: </b>
                    {item.borders.map((item) => (
                      <span className="map-borders">{item}</span>
                    ))}
                  </h5>
                ) : null}

                <h5>
                  <b>Timezones: </b>
                  {item.timezones.map((item) => (
                    <span className="map-timezones">{item}</span>
                  ))}
                </h5>

                {/* <div id="buttons-details-container">
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
              </div> */}
                <button id="button-return">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    RETURN
                  </Link>
                </button>
              </div>
            </section>
          ))}
    </section>
  );
}
