class ForgotPasswordPage {

  clickForgotPassword() {
    cy.contains('Forgot your password?').click()
  }

  inputUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  clickReset() {
    cy.get('button[type="submit"]').click()
  }

  verifyResetMessage() {
    cy.contains('Reset Password link sent successfully').should('be.visible')
  }

}

export default ForgotPasswordPage

e2e: {
  pageLoadTimeout: 0
}
