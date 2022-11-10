const { I } = inject();
const login = require('../pages/login_page')
const home = require('../pages/home_page')

Given('i fill email', () => {
  I.fillField(login.fields.email, 'teste@teste.com')
});

Given('i fill password', () => {
  I.fillField(login.fields.senha, '123456')
});

When('i tap enter', () => {
  I.tap(login.butons.enter)
});

Then('i see the button Salvar', () => {
  I.waitForElement(home.button.save, 5)
  I.seeElement(home.button.save)
});
