import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import "./Details.css";

function Details(props) {
  const { code } = useParams();
  const [countryDetails, setCountryDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchOneCountry = async (code) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${code.toLowerCase()}`
      );
      console.log(response);
      const responseData = await response.json();
      setCountryDetails(responseData);
      setIsLoading(false);
    } catch (err) {
      window.alert("Something went wrong! Please refresh the page");
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOneCountry(code);
  }, [code]);

  return (
    <div className="details">
      {isLoading && <h1>Loading...</h1>}
      {countryDetails && !isLoading && (
        <div>
          <div className="backLink__container">
            <div className={`backBtn backBtn__${props.mode}`}>
              <Link to="/" style={{ width: "100%" }}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back
              </Link>
            </div>
          </div>
          <div className="countryDetails__container">
            <div className="countryDetails__img">
              <img src={countryDetails.flag} alt={countryDetails.name} />
            </div>
            <div className="details__container">
              <h2>{countryDetails.name}</h2>
              <div className="subdetails__container">
                <div className="subdetails__col-1">
                  <p>
                    <span className="bolder">현지 국가 이름: </span>
                    {countryDetails.nativeName}
                  </p>
                  <p>
                    <span className="bolder">인구: </span>
                    {countryDetails.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                  <p>
                    <span className="bolder">지역: </span>
                    {countryDetails.region}
                  </p>
                  <p>
                    <span className="bolder">세부 지역: </span>
                    {countryDetails.subregion}
                  </p>
                  <p>
                    <span className="bolder">수도: </span>
                    {countryDetails.capital}
                  </p>
                </div>
                <div className="subdetails__col-2">
                  <p>
                    <span className="bolder">상위 도메인: </span>
                    {countryDetails.topLevelDomain}
                  </p>
                  <p>
                    <span className="bolder">통화: </span>
                    {countryDetails.currencies.length > 1
                      ? countryDetails.currencies.map((c) => c.code + "; ")
                      : countryDetails.currencies[0].code}
                  </p>
                  <p>
                    <span className="bolder">언어: </span>
                    {countryDetails.languages.length > 1
                      ? countryDetails.languages.map((lang) => {
                          return lang.name + "; ";
                        })
                      : countryDetails.languages[0].name}
                  </p>
                </div>
              </div>
              <div className="borderCountries__container">
                <p className="bolder">인접 국가들: </p>
                <div className="borderCountries__list">
                  {countryDetails.borders.map((country) => {
                    return (
                      <div
                        className={`borderCountry borderCountry__${props.mode}`}
                        key={country}
                      >
                        <Link to={`/detail/${country}`}>{country}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
