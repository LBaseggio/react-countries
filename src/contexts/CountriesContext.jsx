import React from "react";

export const CountriesContext = React.createContext(null);

export default function CountriesContextProvider(props) {
  const [countries, setCountries] = React.useState();
  const [countriesFavoriteList, setCountriesFavoriteList] = React.useState([]);

  React.useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((response) => {
        setCountries(response);
        console.log("countries:", response);
      });
  }, []);

  const countryDelete = (name) => {
    console.log("COUNTRYDELETE NAME COMING IN: ", name);
    const countriesUpdated = countries.filter(
      (country) => country.name !== name
    );
    console.log("NEW COUNTRY LIST POST DELETION: ", countriesUpdated);
    setCountries({ countries: countriesUpdated });
  };

  const addCountryToFavorites = (countryNameToFavorite) => {
    // countryNameToFavorite === props.id em Movie.js
    // console.log(countryNameToFavorite);
    const newFavoriteCountry = countries.find(
      (country) => country.name === countryNameToFavorite
    );
    console.log(newFavoriteCountry);
    if (!countriesFavoriteList.includes(newFavoriteCountry)) {
      setCountriesFavoriteList([...countriesFavoriteList, newFavoriteCountry]);
    } else {
      alert(`${newFavoriteCountry.name} is already a Favorite`);
    }
  };

  const removeCountryToFavorites = (countryNameToLeaveFavorite) => {
    // movieIdToRemove === props.id em Movie.js
    console.log(countryNameToLeaveFavorite);
    const countriesFavoriteListUpdated = countriesFavoriteList.filter(
      (country) => country.name !== countryNameToLeaveFavorite
    );
    console.log(countriesFavoriteListUpdated);
    setCountriesFavoriteList([...countriesFavoriteListUpdated]);
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        countryDelete,
        countriesFavoriteList,
        addCountryToFavorites,
        removeCountryToFavorites,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
}
