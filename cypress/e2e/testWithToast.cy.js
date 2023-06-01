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
            cy.get('.col-md-6.col-sm-12:nth-child(1) .form-group button.select-button').click();
            cy.get('nb-option[ng-reflect-value="top-right"]').click();
            cy.get('.col-md-6.col-sm-12:nth-child(1) .form-group button.select-button').should('contain', 'top-right');
            cy.get('input[name="timeout"]').clear().type(20000);
            cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
            cy.get('.ng-tns-c209-54.ng-star-inserted nb-toast .title.subtitle').should('contain', title);
            cy.get('.ng-tns-c209-54.ng-star-inserted nb-toast .message').should('contain', content);
            cy.get('.ng-tns-c209-54.ng-star-inserted nb-toast').should('have.css', 'background-color').and('eq', 'rgb(176, 0, 32)');
            cy.get('.ng-tns-c209-54.ng-star-inserted nb-toast').should('have.prop', 'clientLeft', 1);
            cy.get('.ng-tns-c209-54.ng-star-inserted nb-toast').should('have.prop', 'clientTop', 1);
            cy.get('.ng-tns-c209-54.ng-star-inserted nb-toast path[d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"]');
            
        });
    });
});