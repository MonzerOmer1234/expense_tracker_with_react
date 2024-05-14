import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)

  const incomeMoney = amounts.filter(amount => amount > 0);
  const totalIncomeMoney = "+$" + incomeMoney.reduce((curr , acc) => curr + acc , 0).toFixed(2)
  const expenseMoney = amounts.filter(amount => amount < 0);
  const positiveExpenseMoney = expenseMoney.map(expense => expense * -1);
  const totalExpenseMoney = "-$" + positiveExpenseMoney.reduce((curr , acc) => curr + acc , 0).toFixed(2)
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">
          {totalIncomeMoney}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">
             {totalExpenseMoney}
          </p>
        </div>
      </div>
    </>
  );
};
