import React from 'react';

class EditExpanse extends React.Component {
  render() {
    const {
      match,
    } = this.props;
    return (
      <div>
        <p>Editing the expanse with id of {match.params.id}</p>
      </div>
    )
  }
}

export default EditExpanse;
