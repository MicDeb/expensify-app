const expansesReducerDefaultStore = [];

const expansesReducer = (state = expansesReducerDefaultStore, action) => {
  switch (action.type) {
    case 'ADD_EXPANSE':
      return [
        ...state,
        action.expanse
      ];
    case 'REMOVE_EXPANSE':
      return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPANSE':
      return state.map((expanse) => {
        if (expanse.id === action.id) {
          return {
            ...expanse,
            ...action.updates
          }
        } else {
          return expanse;
        }
      });
    default:
      return state;
  }
}

export default expansesReducer;
