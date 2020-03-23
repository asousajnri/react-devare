module.exports = function reducer(state, action) {
  switch (action.type) {
    case 'MESSAGE':
      return {
        message: action.message,
      };
    case 'USER_AUTH':
      return {
        state,
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
    case 'OPEN_MENU_MOBILE':
      return {
        openMenuMobile: !state.openMenuMobile,
      };
    default:
      return state;
  }
};
