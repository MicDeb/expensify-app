import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  render() {
    const {
      description,
      note,
      amount,
    } = this.state;
    console.log(description, note, amount)
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note form your expense (optional)"
            value={note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;
