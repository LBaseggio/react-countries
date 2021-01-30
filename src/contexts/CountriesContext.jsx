import React from "react";

export const CountriesContext = React.createContext(null);

export default function CountriesContextProvider(props) {
  const [countries, setCountries] = React.useState();

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
    const newCountryList = countries.filter((country) => country.name !== name);
    console.log(newCountryList);
    setCountries({ countries: newCountryList });
  };

  return (
    <CountriesContext.Provider
      value={{ countries, setCountries, countryDelete }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
}
  