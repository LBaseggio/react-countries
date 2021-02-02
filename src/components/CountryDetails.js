import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { useHistory } from "react-router-dom";
import Spinner from "../Assets/spinner.gif";
import "./styling.css";

export default function CountryDetails(props) {
  const {
    countries,
    setCountries,
    removeCountryToFavorites,
    addCountryToFavorites,
  } = React.useContext(CountriesContext);
  const history = useHistory();

  React.useEffect(() => {
    const countryToFindName = props.match.params.name;
    const countryToSeeDetails = countries.find(
      (country) => country.name === countryToFindName
    );
    countries ? (
      setCountries(countryToSeeDetails)
    ) : (
      <img src={Spinner} alt="spinner" />
    );
  }, []);
  console.log("countries:", countries);

  return (
    <section className="grand-card-details-container">
      <div>
        <section className="card-details-container">
          <div className="flag-details-container">
            <img src={countries.flag} alt="flag" />
          </div>
          <h2>{countries.name}</h2>
          <h5>Native name: {countries.nativeName}</h5>
          <h5>Capital: {countries.capital}</h5>
          <h5>Region: {countries.region}</h5>
          <h5>Sub-Region: {countries.subregion}</h5>
          <h5>Population: {countries.population}</h5>
          <h5>Area: {countries.area}km²</h5>
          <h5>
            Language: {countries.languages && countries.languages[0].name}
          </h5>
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
            <button
              id="button-return"
              type="button"
              onClick={() => {
                history.push("/");
              }}
            >
              Return
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
