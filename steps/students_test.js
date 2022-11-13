Feature('Students');

const { I, login_page, home_page } = inject()

Scenario('Add student with sucess', () => {
  login_page.doLogin('teste@teste.com', '123456')
  home_page.registerStudent('9090', 'Diego Fernandes')
  home_page.searchStudent('Diego Fernandes', '9090')
});
