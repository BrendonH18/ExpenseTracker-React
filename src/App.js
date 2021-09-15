import './App.css';
import React from 'react';
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      expenseDate: '',
      expenseDescription: '',
      expenseLocation: '',
      expenseAmount: '',
      expenseCategory: '',
      expenseArray: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.formatAmount = this.formatAmount.bind(this);
  }

componentDidMount() {
  this.setState({
    expenseArray: JSON.parse(localStorage.getItem('expenses')) || []
  })
}

componentDidUpdate(prevProps, prevState) {
  if(this.state.expenseArray !== prevState.expenseArray.lengeth) {
    localStorage.setItem('expenses', JSON.stringify(this.state.expenseArray))
  }
}

handleChange(e) {
  const { name, value } = e.target;
  console.log('name: ', name, 'value: ', value);
  this.setState({
    [name]: value
  })
}


handleSubmit(e) {
  e.preventDefault();

  const newExpense = 
    {
      id: Date.now(),
      date: this.state.expenseDate,
      description: this.state.expenseDescription,
      location: this.state.expenseLocation,
      amount: this.state.expenseAmount,
      category: this.state.expenseCategory
    }

  this.setState({
    expenseArray: [...this.state.expenseArray, newExpense],
    expenseDate: '',
    expenseDescription: '',
    expenseLocation: '',
    expenseAmount: '',
    expenseCategory: ''
  });
}

formatAmount(amount) {
  return new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: "USD"
  }).format(amount);
}



formatDate(date) {
  const [year, month, day] = date.split('-')
  return day === undefined ? "" : `${month}/${day}/${year}`
}

removeExpense = (rowId) => {
  const arrayCopy = this.state.expenseArray.filter((row) => row.id !== rowId)
  this.setState({data: arrayCopy})
}

render() {
  return (
    <div id="container">
      <Form 
       state = {this.state}
       handleChange = {this.handleChange}
       handleSubmit = {this.handleSubmit} 
      />
      <Table 
        expenseArray={this.state.expenseArray}
        removeExpense={this.removeExpense}
        formatDate={this.formatDate}
        formatAmount={this.formatAmount}
      />
    </div>
    
  )
}

}

export default App;