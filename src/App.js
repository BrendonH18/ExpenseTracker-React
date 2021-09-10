import './App.css';
import data from './expenses';
import React from 'react';

const Row = ({id, date, description,where, amount, category, remove}) => (
  <tbody>
    <tr>
      <td class="text-center">{date}</td>
      <td class="text-center">{description}</td>
      <td class="text-center">{where}</td>
      <td class="text-center">{amount}</td>
      <td class="text-center">{category}</td>
      <td class="text-center"><button  onClick={() => remove(id)}
      type='submit'>X</button></td>
    </tr>
  </tbody>
)

let formatter = new Intl.NumberFormat('us-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

class Table extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data,
      nextId: 10
    }
  }

handleSubmit = (e) => {
  e.preventDefault()
  this.pushNewExpense(e)
  this.clearForm()
}

pushNewExpense(e) {
  const newExpense = 
    {
      id: this.state.nextId,
      date: this.formatDate(e.target[0].value),
      description: e.target[1].value,
      where: e.target[2].value,
      amount: formatter.format(e.target[3].value),
      category: e.target[4].value
    }
  const newArray = [...this.state.data].concat(newExpense)
  this.setState({data: newArray, nextId: this.state.nextId + 1})
}

clearForm() {
  Array.from(document.querySelectorAll('input')).forEach(
    input => (input.value = "")
  )
}

formatDate(date) {
  const [year, month, day] = date.split('-')
  return day === undefined ? "" : `${month}/${day}/${year}`
}

remove = (rowId) => {
  const arrayCopy = this.state.data.filter((row) => row.id !== rowId)
  this.setState({data: arrayCopy})
}

render() {
  const rows = this.state.data.map((rowData) => <Row key={rowData.id} remove={this.remove} {...rowData}/>)

  return (
    <div id="container">
      <h1 class="text-center">Super Awesome Expense Tracker</h1>
      <h2 class="text-center">Create Expense</h2>
    <form id="form" onSubmit={this.handleSubmit}>
      
      <div class="form-group row">
        <label for="expenseDate" class="col-sm-3 col-form-label">Date: </label>
        <div class="col-sm-9">
          <input type="date" placeholder="Date" name="Date" id="expenseDate" class="form-control"/>
        </div>
      </div>

      <div class="form-group row">
        <label for="expenseDescription" class="col-sm-3 col-form-label">Description: </label>
        <div class="col-sm-9">
          <input type="text" placeholder="Expense Description" name="Description" id="expenseDescription" class="form-control"/>
        </div>
      </div>

      <div class="form-group row">
        <label for="expenseWhere" class="col-sm-3 col-form-label">Where: </label>
        <div class="col-sm-9">
          <input class="form-control" type="text" placeholder="Where?" name="Where" id='expenseWhere'/>
        </div>
      </div>

      <div class="form-group row">
        <label for='expenseAmount' class="col-sm-3 col-form-label">Amount:</label> 
        <div class="col-sm-9">
          <input class="form-control" type="number" step="0.0001" name="Amount" id="expenseAmount" placeholder="$0.00"/>
        </div>
      </div>

      <div class="form-group row">
        <label for="expenseCategory" class="col-sm-3 col-form-label">Category: </label>
        <div class="col-sm-9">
          <select class="form-control" name="Category" id="expenseCategory" placeholder="Food">
            <option value="Housing">Housing</option>
            <option value="Transportation">Transportation</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-9 offset-sm-3" style={{marginTop:20}}>
          <button type="submit" id="submit" class="btn btn-primary">Add Expense</button>
        </div>
      </div>
    </form>
    <br/>
    <table id="expenseTable" class="table">
      <thead>
        <tr>
          <th class="text-center">Date</th>
          <th class="text-center">Description</th>
          <th class="text-center">Where</th>
          <th class="text-center">Amount</th>
          <th class="text-center">Category</th>
          <th class="text-center">Delete?</th>
        </tr>
      </thead>
      {rows}
    </table>
    </div>
  )
}

}

export default Table;