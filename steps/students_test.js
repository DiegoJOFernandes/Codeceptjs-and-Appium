Feature('Students');

const { I, login_page, home_page } = inject()

Scenario('Add student with sucess', () => {
  const email = 'teste@teste.com'
  const pass = '123456'
  const student = 'Diego Fernandes'
  const code = '9090'

  login_page.doLogin(email, pass)
  home_page.registerStudent(code, student)
  home_page.searchStudent(student, code)
});
