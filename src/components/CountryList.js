import React from "react";
import CountryCard from "./CountryCard";
// import axios from "axios";

export default class CountryList extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.fecthCountries();
  }

  fecthCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ countries: response });
        // console.log(response);
      });
  };

  // fecthCountries = () => {
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/all`)
  //     .then((response) => {
  //     this.setState({ countries: response.data });
  //     console.log(response.data);
  //   });
  // };

  render() {
    return (
      <section>
        {this.state.countries.map((countrie, index) => (
          <CountryCard key={index} {...countrie} />
        ))}
      </section>
    );
  }
}
