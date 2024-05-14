import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const TransactionItem = ({ transaction }) => {
  const globalCtx = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? "-" : "+";
  function deleteTransactionHandler(id) {
    globalCtx.deleteTransaction(id)
  }
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={()=> deleteTransactionHandler(transaction.id)}>
        x
      </button>
    </li>
  );
};
