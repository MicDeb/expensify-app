import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpense extends React.Component {
  render() {
    const {
      match,
      expenseObj,
      dispatch,
      history,
    } = this.props;
    console.log(this.props)
    return (
      <div>
        <ExpenseForm
          expense={expenseObj}
          onSubmit={exp => {
            dispatch(editExpense(expenseObj.id, exp));
            history.push('/')
          }}
        />
        <button
          onClick={() => {
            dispatch(removeExpense({ id: expenseObj.id }));
            history.push('/')
          }}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      expenseObj: state.expenses.find(expense => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpense);
