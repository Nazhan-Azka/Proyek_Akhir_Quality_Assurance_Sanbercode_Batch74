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

  verifyDashboard() {
    // cek URL dashboard
    cy.url().should('include', 'dashboard')

    // cek ada teks Dashboard di halaman
    cy.get('h6.oxd-text').contains('Dashboard')
  }
}

export default DashboardPage