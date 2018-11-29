import React from 'react';
import ExpenseList from './ExpenseList';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ExpenseList />
      </div>
    )
  }
}

export default Dashboard;
