import LoginPage from '../../support/pageObjects/LoginPage'

describe('OrangeHRM Login Automation', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('TC01 - Login berhasil', () => {

    cy.intercept('POST', '**/auth/validate').as('loginRequest')

    loginPage.inputUsername('Admin')
    loginPage.inputPassword('admin123')
    loginPage.clickLogin()

    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('eq', 302)

    loginPage.verifyDashboard()
  })

  it('TC02 - Login gagal password salah', () => {

    loginPage.inputUsername('Admin')
    loginPage.inputPassword('wrongpass')
    loginPage.clickLogin()

    loginPage.verifyError()
  })

  it('TC03 - Login gagal username kosong', () => {

    loginPage.inputPassword('admin123')
    loginPage.clickLogin()

    cy.contains('Required')
      .should('be.visible')
  })

  it('TC04 - Login gagal password kosong', () => {

    loginPage.inputUsername('Admin')
    loginPage.clickLogin()

    cy.contains('Required')
      .should('be.visible')
  })

  it('TC05 - Login gagal username dan password kosong', () => {

    loginPage.clickLogin()

    cy.get('.oxd-input-field-error-message')
      .should('have.length', 2)
  })

})