module.exports = function reducer(state, action) {
  switch (action.type) {
    case 'MESSAGE':
      return {
        message: action.message,
      };
    case 'USER_AUTH':
      return {
        userAuth: {
          isLogged: action.isLogged,
          id: action.id,
          name: action.name,
          image: action.image,
          token: action.token,
        },
        modal: state.modal,
      };
    case 'MODAL':
      return {
        modal: {
          visible: !state.modal.visible,
          bodyText: action.bodyText,
          buttonText: action.buttonText,
          buttonAction: action.buttonAction,
        },
        userAuth: state.userAuth,
        openMenuMobile: state.openMenuMobile,
      };
    case 'OPEN_MENU_MOBILE':
      return {
        openMenuMobile: !state.openMenuMobile,
        userAuth: state.userAuth,
        modal: state.modal,
      };
    default:
      return state;
  }
};
