import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const Balance = () => {
  const globalCtx = useContext(GlobalContext);

  const totalBalance = globalCtx.transactions.reduce((totalBalance, transaction)  => {
    return totalBalance + transaction.amount
  } , 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalBalance.toFixed(2)}</h1>
    </>
  );
};
