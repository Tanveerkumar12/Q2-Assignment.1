"use client";

import { useParams } from "next/navigation";

export default function CountryName() {
  const params = useParams();
  const country_name = params?.country_name as string; // Access the route segment correctly
  
  const countries = {
    pakistan: {
      name: "Pakistan",
      population: "234.23 million",
      capital: "Islamabad",
    },
    usa:{
        name:"USA",
        population:'34.2 million',
        capital:"Washington dc"
    },
    japan:{
        name:"Japan",
        population:'123.7 million',
        capital:"Tokyo"
    },
    india: {
      name: "India",
      population: "1.417 billion",
      capital: "New Delhi",
    },
    bangladesh: {
      name: "Bangladesh",
      population: "172.2 million",
      capital: "Dhaka",
    },
    
  };

  // Ensure the country_name is lowercase and defined before accessing the countries object
  const countryKey = country_name?.toLowerCase();

  // Retrieve the country details using the countryKey
  const country = countryKey ? countries[countryKey as keyof typeof countries] : undefined;

  if (!country) {
    return (
      <div>
        <h1><b>Country Details</b></h1>
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <div>
      <h1><b>Country Details</b></h1>
      <p>Country name: {country.name}</p>
      <p>Population: <span style={{ color: "blue" }}>{country.population}</span></p>
      <p>Capital city: <span style={{ color: "blue" }}>{country.capital}</span></p>
    </div>
  );
}