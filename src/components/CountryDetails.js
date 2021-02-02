import React from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { Link, useHistory } from "react-router-dom";
import "./styling.css";

export default function CountryDetails(props) {
  const {
    countries,
    setCountries,
    removeCountryToFavorites,
    addCountryToFavorites,
  } = React.useContext(CountriesContext);

  React.useEffect(() => {
    const countryToFindName = props.match.params.name;
    const countryToSeeDetails = countries.find(
      (country) => country.name === countryToFindName
    );
    countries && setCountries(countryToSeeDetails);
  }, []);
  console.log("countries:", countries);
  // const history = useHistory();

  return (
    <section className="grand-card-details-container">
      <div>
        <section className="card-details-container">
          <div className="flag-details-container">
            <img src={props.flag} alt="flag" />
          </div>
          <h2>{props.name}</h2>
          <h5>Native name: {props.nativeName}</h5>
          <h5>Capital: {props.capital}</h5>
          <h5>Region: {props.region}</h5>
          <h5>Sub-Region: {props.subregion}</h5>
          <h5>Population: {props.population}</h5>
          <h5>Area: {props.area}km²</h5>
          <h5>Language: {props.languages && props.languages[0].name}</h5>
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
              // onClick={() => {
              //   history.push("/");
              // }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Return
              </Link>
              Return
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
