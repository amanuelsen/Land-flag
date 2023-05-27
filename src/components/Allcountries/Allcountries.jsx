import { useState, useEffect } from "react";
import { apiURL } from "../util/api";
import Searcinput from "../Search/Searchinput";
import Filtercounty from "../Filtercoutry/Filtercountry";
import { Link } from "react-router-dom";
const AllCountries = ({darkMode}) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

 

  const getAllCountries = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  const getCountryByname = async (countryname) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryname}`
      );
      if (!res.ok) throw new Error("did not found conutry !");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  const getCountryByregion = async (regionname) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${regionname}`
      );

      if (!res.ok) throw new Error(" failed...");
      const data = await res.json();
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
   
     <div className="all__country__wrapper">
      <div className="country__top">
        <div  className="search">
          <Searcinput  onSearch={getCountryByname} />
        </div>

        <div  className="filter">
          <Filtercounty onSelect={getCountryByregion} />
        </div>
      </div>

      <div className="country__bottom">
        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="country__card">
              <div className="country__img">
                <img src={country.flags.png} alt="" />
              </div>

              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>
                  {" "}
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h6>

                <h6> Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
   
  );
};

export default AllCountries;

// import { useState, useEffect } from "react";
// import { Apiurl } from "../util/api";
// const Allcountries = () => {
//   const [counties, setcounties] = useState([]);
//   const [isloading, setloading] = useState(true);
//   const [error, seterror] = useState([]);

//   const getAllcountries = async () => {
//     try {
//       const res = await fetch(`${Apiurl}`);
//       if (!res.ok) throw new Error("Något gick fel");
//       const data = await res.json();
//       console.log(data);
//       setcounties(data);
//       isloading(false);
//     } catch (error) {
//       setloading(false);
//       seterror(error.message);
//     }
//   };
//   useEffect(() => {
//     getAllcountries();
//   }, []);
//   return (
//     <div className="all_country_wrapper">
//       <div className="country_top"></div>
//       <div className="country_buttom">
//       {isloading && !error && <h4>Loading........</h4>}
//         {error && !isloading && <h4>{error}</h4>}

//         {counties.map((country) => {
//           <div className="country_card">
//             <div className="country_img"></div>
//             <img src={country.flags.png} alt="" />
//             <div className="country_data">
//               <h3>{country.name.comnon}</h3>
//               <h6>Population:{country.population}</h6>
//               <h6>Region:{country.region}</h6>
//               <h6>capital:{country.captial}</h6>
//             </div>
//           </div>;
//         })}
//       </div>
//     </div>
//   );
// };
// export default Allcountries;
