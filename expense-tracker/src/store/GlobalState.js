import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const intialState = {
  transactions: [],
};
export const GlobalContext = createContext(intialState);

// creating the context provider

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);
  // actions
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
