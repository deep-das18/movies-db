import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
// make sure to use https
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avengers");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };