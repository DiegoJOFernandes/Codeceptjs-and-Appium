const { I } = inject();

module.exports = {

  button: {
    save: "~salvar",
  },

  fields: {
    code: { ios: "//XCUIElement", android: "~codigo" },
    name: { ios: "//XCUIElement", android: "~aluno" },
    search: { ios: "//XCUIElement", android: "~search" },
  },

  registerStudent(code, name) {
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save)
  },

  searchStudent(search, check) {
    I.fillField(this.fields.search, search)

    I.runOnAndroid(() => {
      I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView') 
    })

    I.runOnIOS(() => {
      I.seeElement('//XCUIElement[@content-desc="' + check + '"]') 
    })

  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5);
    I.seeElement(this.button.save);
  },
};
