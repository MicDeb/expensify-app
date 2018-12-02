import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    )
  }
}

export default Dashboard;
