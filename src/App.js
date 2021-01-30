import React from "react";
import CountriesContextProvider from "./contexts/CountriesContext";
import CountryList from "./components/CountryList";
import CountryCard from "./components/CountryCard";

export default function App() {
  return (
    <CountriesContextProvider>
      <CountryList />
      <CountryCard />
    </CountriesContextProvider>
  );
}
