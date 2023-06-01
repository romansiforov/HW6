/// <reference types="cypress"/>
describe('Registration and Login', () => {
    const tests = [
      {
        login: 'Roman1924',
        password: 'Pa$$w0rd!',
        productName: 'Casual 3/4 Sleeve Baseball T-Shirt'
      }
  ]
    beforeEach(()=>{
      cy.visit('https://automationteststore.com/index.php?rt=account/login');
    });
  

  
    tests.forEach(({login, password, productName}) => {
      it('authentication', ()=>{
        cy.get('#loginFrm_loginname').type(login).should('have.value', login);
        cy.get('#loginFrm_password').type(password).should('have.attr', 'type', 'password');
        cy.get('button[title="Login"]').click();
        cy.get('h2.heading2').should('have.text', 'My Account');
        cy.get('input#filter_keyword').clear().type(productName).should('have.value', productName);
        cy.get('.fa.fa-search').click();
        cy.get('a[title="Casual 3/4 Sleeve Baseball T-Shirt"]').click();
        cy.get('.productpagecart .cart').click();
        cy.get('.maintext').should('contain', 'Shopping Cart');
        cy.get('#cart_checkout2').click();
        cy.get('.maintext').should('contain', 'Checkout Confirmation');
        cy.get('#checkout_btn').click();
        cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');

      });
    
    })
      
  });