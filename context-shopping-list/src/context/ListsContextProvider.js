import React from "react";
import withDataFetching from "../withDataFetching";

export const ListsContext = React.createContext();

const ListsContextProvider = ({ children, data }) => (
  <ListsContext.Provider value={{ lists: data }}>
    {children}
  </ListsContext.Provider>
);
export default withDataFetching({
  dataSource: "./data.json",
})(ListsContextProvider);
