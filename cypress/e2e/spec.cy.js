/// <reference types="cypress"/>
describe('Registration and Login', () => {
  const tests = [
    {
      firstName: 'Roman', 
      lastName: 'Siforov', 
      email: 'romansiforov6@gmail.com', 
      adress: 'Chresatyk 13', 
      country: 'Ukraine',
      city: 'Kyiv',
      region: 'Kyiv',
      zip: '04114',
      login: 'Roman1924',
      password: 'Pa$$w0rd!'
    }
]
  beforeEach(()=>{
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
  });


  tests.forEach(({firstName, lastName, email, adress, country, city, region, zip, login, password}) => {

  it('registration', () => {
    cy.get('button[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(firstName).should('have.value', firstName);
    cy.get('#AccountFrm_lastname').type(lastName).should('have.value', lastName);
    cy.get('#AccountFrm_email').type(email).should('have.value', email);
    cy.get('#AccountFrm_city').type(city).should('have.value', city);
    cy.get('#AccountFrm_address_1').type(adress).should('have.value', adress);
    cy.get('#AccountFrm_country_id').select(country);
    cy.get('#AccountFrm_zone_id').select(region);
    cy.get('#AccountFrm_postcode').type(zip).should('have.value', zip);
    cy.get('#AccountFrm_loginname').type(login).should('have.value', login);
    cy.get('#AccountFrm_password').type(password).should('have.attr', 'type' ,'password');
    cy.get('#AccountFrm_confirm').type(password).should('have.attr', 'type' ,'password');
    cy.get('#AccountFrm_newsletter0').click().should('have.value', '0');
    cy.get('#AccountFrm_agree').click();
    cy.get('button[title="Continue"]').click();
    cy.get('h1 .maintext').should('contain', 'Your Account Has Been Created!')
  });

  tests.forEach(({login, password}) => {
    it('authentication', ()=>{
      cy.get('#loginFrm_loginname').type(login).should('have.value', login);
      cy.get('#loginFrm_password').type(password).should('have.attr', 'type', 'password');
      cy.get('button[title="Login"]').click();
      cy.get('h2.heading2').should('have.text', 'My Account');
    });
  
  });


  afterEach(() => {
    cy.visit('https://automationteststore.com/index.php?rt=account/logout');
    cy.get('h1 .maintext').should('contain', 'Account Logout');
  });
    
  });
});