/// <reference types="cypress"/>

describe('Tests with toast', ()=>{
    const tests = [
        {
            title: 'Roman',
            content: 'Some random content'
        }
    ];
    tests.forEach(({title, content})=>{
        it('Test with toast', ()=>{
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('img[alt="Material Dark Theme"]').click();
            cy.get('.menu-title.ng-tns-c141-19').should('have.text', 'Modal & Overlays').click();
            cy.get('a[href="/pages/modal-overlays/toastr"]').click();
            cy.get('input[name="title"]').clear().type(title).should('have.value', title);
            cy.get('input[name="content"]').clear().type(content).should('have.value', content);
            cy.get('.col-md-6.col-sm-12:nth-child(2) .form-group button.select-button').click();
            cy.get('nb-option[ng-reflect-value="danger"]').click();
            cy.get('.col-md-6.col-sm-12:nth-child(2) .form-group button.select-button').should('contain', 'danger');


        });
    });
});