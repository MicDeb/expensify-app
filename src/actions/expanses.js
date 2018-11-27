import uuid from 'uuid';

// ADD EXPANSE
export const addExpanse = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPANSE',
  expanse: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE EXPANSE
export const removeExpanse = ( { id } = {}) => ({
  type: 'REMOVE_EXPANSE',
  id
});


// EDIT EXPANSE
export const editExpanse = (id, updates) => ({
  type: 'EDIT_EXPANSE',
  id,
  updates
});
