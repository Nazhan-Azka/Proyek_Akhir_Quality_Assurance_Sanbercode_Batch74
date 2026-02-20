import LoginPage from "../../support/pageObjects/LoginPage";
import DashboardPage from "../../support/pageObjects/DashboardPage";

Cypress.on('uncaught:exception', () => false) // Mencegah Cypress gagal test ketika ada error dari aplikasi (frontend error).

describe('OrangeHRM Dashboard Automation', () => {

  const login = new LoginPage()
  const dashboard = new DashboardPage()

  beforeEach(() => {
    login.visit()
    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()
    login.verifyDashboard()
  })

  it('TC01 - Dashboard widget visible', () => {
    cy.contains('Time at Work')
      .should('be.visible')
  })

  it('TC02 - Dashboard widget visible', () => {
    cy.contains('My Actions')
      .should('be.visible')
  })

  it('TC03 - Dashboard widget visible', () => {
    cy.contains('Quick Launch')
      .should('be.visible')
  })

  it('TC05 - Dashboard widget visible', () => {
    cy.contains('Employee Distribution by Location')
      .should('be.visible')
  })

  it('TC06 - Dashboard widget visible', () => {
    cy.contains('Buzz Latest Posts')
      .should('be.visible')
  })

  it('TC07 - Logout berhasil', () => {

    cy.url()
      .should('include', 'dashboard')

    cy.get('.oxd-userdropdown-tab')
      .click()

    cy.contains('Logout')
      .click()

    cy.url()
      .should('include', 'login')
  })

})