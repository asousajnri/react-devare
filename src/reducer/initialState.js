module.exports = {
  message: 'Testando reducer',
  userAuth: {
    isLogged: localStorage.getItem('isLogged') || false,
    name: '',
    image: '',
    token: '',
  },
  modal: {
    visible: false,
    bodyText: '',
    buttonText: '',
    buttonAction: null,
  },
  openMenuMobile: false,
};
