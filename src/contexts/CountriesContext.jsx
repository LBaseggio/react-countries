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

  const deleteCountryHandler = (name) => {
    console.log(name);
    const newCountryList = this.state.countries.filter(
      (country) => country.name !== name
    );
    console.log(newCountryList);
    this.setState({ countries: newCountryList });
  };

  return (
    <CountriesContext.Provider
      value={{ countries, setCountries, deleteCountryHandler }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
}
