module.exports = function reducer(state, action) {
  switch (action.type) {
    case 'MESSAGE':
      return {
        message: action.message,
      };
    case 'MODAL':
      return {
        modal: {
          visible: !state.modal.visible,
          bodyText: action.bodyText,
          buttonText: action.buttonText,
          buttonAction: action.buttonAction,
        },
      };
    default:
      return state;
  }
};
