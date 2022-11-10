Feature('login');
const faker = require('@faker-js/faker');
const { pause } = require('codeceptjs');
const { I, login_page, home_page } = inject()

BeforeSuite(() => {
  console.log('before suite')
})

Before(() => {
  console.log('before each step')
})

AfterSuite(() => {
  console.log('after suite')
})

After(() => {
  console.log('after step')
})

Scenario('login with sucess', () => {
  login_page.doLogin('teste@teste.com', '123456')
  home_page.checkLoginSuccess()
});

Scenario('login with error', () => {
  login_page.doLogin('xteste@teste.com', '123456')
  login_page.checkLoginError()
});
