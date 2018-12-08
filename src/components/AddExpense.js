import React, {Component} from 'react';
import ExpenseForm from './ExpenseForm';

class AddExpense extends Component {
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm />
      </div>
    )
  }
}

export default AddExpense;
