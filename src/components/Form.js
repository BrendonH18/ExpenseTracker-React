import React from "react"

const Form = ({ handleSubmit, handleChange, state }) => {


  return(
    <div>
      <h1 className="text-center">Super Awesome Expense Tracker</h1>
      <h2 className="text-center">Create Expense</h2>
    <form id="form" onSubmit={handleSubmit}>
      
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">Date: </label>
        <div className="col-md-6">
          <input 
            type="date" 
            placeholder="Date" 
            name="expenseDate" 
            id="expenseDate" 
            className="form-control"
            onChange={handleChange}
            value={state.expenseDate}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-3 col-form-label">Description: </label>
        <div className="col-md-6">
          <input 
            type="text" 
            placeholder="Expense Description" 
            name="expenseDescription" 
            id="expenseDescription" 
            className="form-control"
            onChange={handleChange}
            value={state.expenseDescription}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-3 col-form-label">Where: </label>
        <div className="col-md-6">
          <input 
            className="form-control" 
            type="text" 
            placeholder="Where?" 
            name="expenseLocation" 
            id='expenseWhere'
            onChange={handleChange}
            value={state.expenseLocation}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-3 col-form-label">Amount:</label> 
        <div className="col-md-6">
          <input 
          className="form-control" 
          type="number" 
          step="0.01" 
          name="expenseAmount" 
          id="expenseAmount" 
          placeholder="$0.00"
          onChange={handleChange}
          value={state.expenseAmount}
          required
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-3 col-form-label">Category: </label>
        <div className="col-md-6">
          <select 
            className="form-control" 
            name="expenseCategory" 
            id="expenseCategory" 
            placeholder="Food"
            onChange={handleChange}
            value={state.expenseCategory}>
              <option value="default">Select a category</option>
              <option value="Housing">Housing</option>
              <option value="Transportation">Transportation</option>
              <option value="Food">Food</option>
              <option value="Utilities">Utilities</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-9 offset-sm-3" style={{marginTop:20}}>
          <button type="submit" id="submit" className="btn btn-primary">Add Expense</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Form;



