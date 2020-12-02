import React from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

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
  //   axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
  //     this.setState({ countries: response.data.countries });
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
