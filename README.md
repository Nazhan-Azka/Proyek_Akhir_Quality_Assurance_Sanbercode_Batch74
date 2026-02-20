🚀 OrangeHRM Automation Testing – Cypress

Automation testing project untuk website:

🔗 https://opensource-demo.orangehrmlive.com/

Platform: OrangeHRM

Project ini dibuat menggunakan:

1. Cypress
2. Page Object Model (POM)
3. Intercept (Network Validation)
4. UI Automation

📌 Features Covered

Automation dilakukan pada fitur berikut:

✅ Login

✅ Forgot Password

✅ Dashboard

✅ Directory

✅ Recruitment

✅ Logout


🏗️ Project Structure
cypress/
 ├── e2e/
 │    └── orangehrm_automation/
 │         ├── login.cy.js
 │         ├── forgotPassword.cy.js
 │         ├── dashboard.cy.js
 │         ├── directory.cy.js
 │         └── recruitment.cy.js
 │
 ├── support/
 │    └── pageObjects/
 │         ├── LoginPage.js
 │         └── DashboardPage.js
 │
 └── fixtures/
🧱 Testing Concepts Used
1️⃣ Page Object Model (POM)

✅ Test Case Details
📊 Total Test Case: 21

🔐 LOGIN

TC01 – Login berhasil

TC02 – Login password salah

TC03 – Username kosong

TC04 – Password kosong

TC05 – Semua field kosong



🔁 FORGOT PASSWORD

TC01 – Reset password berhasil

TC02 – Submit tanpa username

TC03 – Klik Cancel kembali ke login

📊 DASHBOARD

TC01 – Dashboard berhasil tampil

TC02 – Widget "Time at Work" visible

TC03 – Widget "My Actions" visible

TC04 –  Widget "Employee Distribution by Location" visible

TC04 – Widget "Buzz Latest Postsd" visible 

TC04 – Logout berhasil 

📁 DIRECTORY

TC01 – Akses menu Directory

TC02 – Search employee

TC03 – Search tanpa input


👨‍💼 RECRUITMENT

TC01 – Akses menu Recruitment

TC02 – Klik Add Candidate

TC03 – Submit tanpa isi form (Required validation)

TC04 – Isi form candidate (dummy data)


⚙️ How to Run the Project

1️⃣ Install Dependencies
npm install
2️⃣ Open Cypress (Interactive Mode)
npx cypress open
3️⃣ Run in Headless Mode
npx cypress run

🔑 Test Credentials
Username: Admin
Password: admin123


🎯 Project Objectives
Project ini dibuat untuk:

- Melatih automation testing menggunakan Cypress

- Mengimplementasikan Page Object Model (POM)

- Menggunakan intercept untuk validasi network

- Membuat struktur automation yang rapi dan scalable


🧠 Project Strengths
✔ Struktur folder terpisah per fitur

✔ Menggunakan Page Object Model

✔ Menggunakan Intercept untuk network validation

✔ Positive & Negative testing

✔ Clean & maintainable script
