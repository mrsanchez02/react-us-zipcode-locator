import React, { createContext, useEffect, useState } from "react";
import {
  ZipCodeContextType,
  ContextChildrenType,
  CityStateObjectType,
} from "../types";

export const ZipcodeContext = createContext<ZipCodeContextType | null>(null);

export const ContextProvider = ({ children }: ContextChildrenType) => {
  const [usZipCode, setUsZipcode] = useState<string>("");
  const [cityState, setCityState] = useState<CityStateObjectType | null>({
    city: "",
    state: "",
  });
  const [notFound, setNotFound] = useState<boolean>(false);

  const fetchInfo = (search: string): void => {
    const URL = `https://www.zipcodeapi.com/rest/${process.env.REACT_APP_KEY}/info.json/${search}/degrees`;
    fetch(URL)
      .then((resp) => {
        if (resp.status === 404) {
        throw new Error("404");
      }
        return resp.json();
      })
      .then((data) => {
        setNotFound(false);
        setCityState({
          city: data.city,
          state: data.state,
        });
      })
      .catch((err) => {
        setNotFound(true);
        console.log("Oops! here's the err: ", err);
      });
  };

  const SetZipCode = (zipcode: string): void => {
    setUsZipcode(zipcode);
  };

  useEffect(() => {
    if (usZipCode.trim() === "") return;
    fetchInfo(usZipCode);
  }, [usZipCode]);
  console.log(process.env.REACT_APP_KEY);
  return (
    <ZipcodeContext.Provider
      value={{
        ZipCode: usZipCode,
        CityState: cityState,
        SetZipCode,
        notFound,
      }}
    >
      {children}
    </ZipcodeContext.Provider>
  );
};
