class DashboardPage {

  clickDirectoryMenu() {
    cy.contains('Directory').click()
  }

  verifyDirectoryPage() {
    cy.url().should('include', 'directory')
  }

  clickRecruitmentMenu() {
  cy.contains('Recruitment').click()
}

verifyRecruitmentPage() {
  cy.url().should('include', 'recruitment')
}
}
export default DashboardPage
