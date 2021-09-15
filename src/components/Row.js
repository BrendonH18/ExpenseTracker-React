import React from "react";

const Row = ({ expenseArray, removeExpense, formatDate, formatAmount }) => {

  return expenseArray.map(expense => {
    return (
      <tr key={expense.id}>
        <td class="text-center">{formatDate(expense.date)}</td>
        <td class="text-center">{expense.description}</td>
        <td class="text-center">{expense.location}</td>
        <td class="text-center">{formatAmount(expense.amount)}</td>
        <td class="text-center">{expense.category}</td>
        <td class="text-center">
          <button 
            type='submit'
            onClick={() => removeExpense(expense.id)}>
              X
          </button>
        </td>
      </tr>
    )
  })
}

export default Row