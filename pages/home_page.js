const { I } = inject();

module.exports = {

  // insert your locators and methods here
  button: {
    save: '~salvar',
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  }
}
