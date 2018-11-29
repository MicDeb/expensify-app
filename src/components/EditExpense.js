import React from 'react';

class EditExpense extends React.Component {
  render() {
    const {
      match,
    } = this.props;
    return (
      <div>
        <p>Editing the expense with id of {match.params.id}</p>
      </div>
    )
  }
}

export default EditExpense;
