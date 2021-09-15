import React from "react";
import Row from "./Row";

const Table = ({ expenseArray, removeExpense, formatDate, formatAmount }) => {

  return(
    <table id="expenseTable" class="table">
      <thead>
        <tr>
          <th className="text-center">Date</th>
          <th className="text-center">Description</th>
          <th className="text-center">Where</th>
          <th className="text-center">Amount</th>
          <th className="text-center">Category</th>
          <th className="text-center">Delete?</th>
        </tr>
      </thead>
      <tbody>
        <Row 
          expenseArray={expenseArray}
          formatDate={formatDate}
          removeExpense={removeExpense}
          formatAmount={formatAmount}
        />
      </tbody>
    </table>
  )
}

export default Table