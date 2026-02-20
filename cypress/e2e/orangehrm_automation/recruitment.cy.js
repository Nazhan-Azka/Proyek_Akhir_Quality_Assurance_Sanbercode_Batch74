import LoginPage from "../../support/pageObjects/LoginPage";
import DashboardPage from "../../support/pageObjects/DashboardPage";

describe('OrangeHRM Recruitment Automation', () => {

  const login = new LoginPage()
  const dashboard = new DashboardPage()

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('TC01 - Akses menu Recruitment', () => {
    // login di dalam test
    login.visit()
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')
    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()
    dashboard.verifyDashboard()

    dashboard.clickRecruitmentMenu()
    dashboard.verifyRecruitmentPage()
  })

  it('TC02 - Klik Add Candidate', () => {
    login.visit()
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')
    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()
    dashboard.verifyDashboard()

    dashboard.clickRecruitmentMenu()
    cy.contains('Add').click()
    cy.url().should('include', 'addCandidate')
  })

  it('TC03 - Submit kosong tampil Required', () => {
    login.visit()
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')
    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()
    dashboard.verifyDashboard()

    dashboard.clickRecruitmentMenu()
    cy.contains('Add').click()
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  it('TC04 - Tambah Candidate (dummy)', () => {
    login.visit()
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')
    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()
    dashboard.verifyDashboard()

    dashboard.clickRecruitmentMenu()
    cy.contains('Add').click()

    cy.get('input[name="firstName"]').type('Test')
    cy.get('input[name="lastName"]').type('Automation')
    cy.get('input[placeholder="Type here"]').first().type('test@email.com')

    cy.get('button[type="submit"]').click()
    cy.url().should('include', 'recruitment')
  })

})