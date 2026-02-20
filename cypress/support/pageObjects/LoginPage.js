class LoginPage {

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  }

  inputUsername(username) {
    cy.get('input[name="username"]').clear().type(username)
  }

  inputPassword(password) {
    cy.get('input[name="password"]').clear().type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  verifyDashboard() {
    cy.url().should('include', 'dashboard')
  }

  verifyError() {
    cy.contains('Invalid credentials').should('be.visible')
  }

  logout() {
  cy.get('.oxd-userdropdown-name').click()
  cy.contains('Logout').click()
}

}

export default LoginPage
