module.exports = {
  message: 'Testando reducer',
  userAuth: {
    isLogged: localStorage.isLogged || false,
    id: localStorage.id || null,
    name: localStorage.name || '',
    image: localStorage.image || '',
    token: localStorage.token || '',
  },
  modal: {
    visible: false,
    bodyText: '',
    buttonText: '',
    buttonAction: null,
  },
  openMenuMobile: false,
};
