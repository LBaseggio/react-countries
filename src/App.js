import React from "react";
import CountriesContextProvider from "./contexts/CountriesContext";
import CountryList from "./components/CountryList";

export default function App() {
  return (
    <CountriesContextProvider>
      <CountryList />
    </CountriesContextProvider>
  );
}
