import React from "react";
import CountriesContextProvider from "./contexts/CountriesContext";
import { Route, Redirect, Switch } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  return (
    <Switch>
      <CountriesContextProvider>
        <CountryList />
        <Route exact path="/home" component={CountryList} />
        <Route path="/details" component={CountryDetails} />
        <Redirect to="/home" />
      </CountriesContextProvider>
    </Switch>
  );
}
