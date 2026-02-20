import LoginPage from '../../support/pageObjects/LoginPage'
import DashboardPage from '../../support/pageObjects/DashboardPage'

describe('OrangeHRM Directory Menu', () => {

  const login = new LoginPage()
  const dashboard = new DashboardPage()

  beforeEach(() => {

    login.visit()

    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()

    login.verifyDashboard()
  })

  it('TC01 - Akses menu Directory', () => {

    dashboard.clickDirectoryMenu()
    dashboard.verifyDirectoryPage()
  })

  it('TC02 - Search employee', () => {

    cy.contains('Directory')
      .click()

    cy.get('input[placeholder="Type for hints..."]')
      .type('Ranga')

    cy.get('button[type="submit"]')
      .click()

    cy.contains('Ranga Akunuri')
      .scrollIntoView()
      .should('exist')
  })

  it('TC03 - Search kosong', () => {

    dashboard.clickDirectoryMenu()

    cy.get('button[type="submit"]')
      .click()

    cy.url()
      .should('include', 'directory')
  })

})