import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

class AddExpense extends Component {
  render() {
    const { dispatch, history } = this.props;
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={expense => {
            dispatch(addExpense(expense))
            history.push('/')
          }}
        />
      </div>
    )
  }
}

export default connect()(AddExpense);
