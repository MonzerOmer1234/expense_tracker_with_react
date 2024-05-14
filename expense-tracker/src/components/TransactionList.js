import React, { useContext } from "react";

import { GlobalContext } from "../store/GlobalState";
import { TransactionItem } from "./TransactionItem";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
         <TransactionItem transaction={transaction} key={transaction.id}/>
        ))}
      </ul>
    </>
  );
};
