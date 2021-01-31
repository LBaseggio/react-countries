import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import CountriesContextProvider from "./contexts/CountriesContext";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <CountriesContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <CountryList />
            <Route exact path="/countries" component={CountryList} />
            <Route path="/countries/name" component={CountryDetails} />
            <Redirect to="/countries" />
          </Switch>
        </BrowserRouter>
      </CountriesContextProvider>
    </div>
  );
}
