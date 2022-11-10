const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
    email: '~email',
    senha: '~senha'
  },

  butons:{
    enter: '~entrar',
  },

  messages: {
    login_error: '~lognFail'
  },

  doLogin(email, password) {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.senha, password)
    I.tap(this.butons.enter)
  },

  checkLoginError() {
    I.waitForElement(this.messages.login_error, 5)
    I.seeElement(this.messages.login_error)
  },
}
