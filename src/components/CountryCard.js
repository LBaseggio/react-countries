import React from "react";

export default function CountryCard(props) {
  const {
    name,
    nativeName,
    capital,
    region,
    subregion,
    population,
    area,
    // languages,
  } = props;

  return (
    <section>
      <p>{name}</p>
      <p>{nativeName}</p>
      <p>{capital}</p>
      <p>{region}</p>
      <p>{subregion}</p>
      <p>{population}</p>
      <p>{area}</p>
      {/* <p>{languages}</p> */}
    </section>
  );
}
