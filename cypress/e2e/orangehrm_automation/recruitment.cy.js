import LoginPage from "../../support/pageObjects/LoginPage";
import DashboardPage from "../../support/pageObjects/DashboardPage";

describe('OrangeHRM Recruitment Automation', () => {

  const login = new LoginPage()
  const dashboard = new DashboardPage()

  beforeEach(() => {
    login.visit()
    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()
    login.verifyDashboard()
  })

  it('TC01 - Akses menu Recruitment', () => {

    dashboard.clickRecruitmentMenu()
    dashboard.verifyRecruitmentPage()

  })

  it('TC02 - Klik Add Candidate', () => {

    dashboard.clickRecruitmentMenu()

    cy.contains('Add')
      .click()

    cy.url()
      .should('include', 'addCandidate')

  })

  it('TC03 - Submit kosong tampil Required', () => {

    dashboard.clickRecruitmentMenu()

    cy.contains('Add')
      .click()

    cy.get('button[type="submit"]')
      .click()

    cy.contains('Required')
      .should('be.visible')

  })

  it('TC04 - Tambah Candidate (dummy)', () => {

    dashboard.clickRecruitmentMenu()

    cy.contains('Add')
      .click()

    cy.get('input[name="firstName"]')
      .type('Test')

    cy.get('input[name="lastName"]')
      .type('Automation')

    cy.get('input[placeholder="Type here"]')
      .first()
      .type('test@email.com')

    cy.get('button[type="submit"]')
      .click()

    cy.url()
      .should('include', 'recruitment')

  })

})