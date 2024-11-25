it('login to Erp', () => {
    cy.visit('https://intmicrotec.neat-url.com:2006/bussiness-owners/');
    cy.get('#Email').clear();
    cy.get('#Email').type('*********');
    cy.get('#Password').clear();
    cy.get('#Password').type('*********');
    cy.get('.custom-btn > img').click();
    cy.origin('https://testdomain.microtecdev.com:2050', () => {

        cy.visit('https://testdomain.microtecdev.com:2050/erp/');
        cy.contains('.modal-card', 'Inventory').should('be.visible').click();
        cy.get('.flex.justify-content-center.arrowIconDiv.imgContDiv.ng-star-inserted').should('be.visible').click();
        cy.contains('.ng-star-inserted', 'Master Data').should('be.visible').click();
        cy.contains('.ng-star-inserted', 'Items definition').should('be.visible').click();
        cy.contains('.btn.save.body_b16', 'Create').should('be.visible').click();
        cy.get('input[placeholder="Name"]').click().type('Auto');

        // cy.get('.p-inputtext.p-component.p-element.ng-star-inserted').first().click().type('Auto', { force: true });
        cy.get('#pn_id_25').click();
        cy.get('#pn_id_25_1').click();
        cy.get('#pn_id_27').click();
        cy.get('#pn_id_27_3').click();
        cy.get('#pn_id_29').click();
        cy.get('#pn_id_29_1').click();
        cy.get('.btn.save.body_b16').eq(2).click();
        //cy.contains('.btn.save.body_b16', 'Save').seconed().click();


    })


})

it.only('Edit item definiton', {defaultCommandTimeOut: 6000} ,()=>{
    // navigate to erp and enter username and password and login
    cy.visit('https://intmicrotec.neat-url.com:2006/bussiness-owners/');
    cy.get('#Email').clear();
    cy.get('#Email').type('**************');
    cy.get('#Password').clear();
    cy.get('#Password').type('*********');
    cy.get('.custom-btn > img').click();
  
    //  navigate to Erp testdomain 
    cy.origin('https://testdomain.microtecdev.com:2050', () => {
    // navigate to inventory
        cy.visit('https://testdomain.microtecdev.com:2050/erp/');
        cy.contains('.modal-card', 'Inventory').should('be.visible').click();
    // navigate to menu side bar and click    
        cy.get('.flex.justify-content-center.arrowIconDiv.imgContDiv.ng-star-inserted').should('be.visible').click();
    //  navigate to master data    
        cy.contains('.ng-star-inserted', 'Master Data').should('be.visible').click();
    // choose item definiton    
        cy.contains('.ng-star-inserted', 'Items definition').should('be.visible').click();
    // navigate to edit screen
        cy.get('img[src="assets/images/table/edit.svg"]').eq(0).click(); 
    // Edit name
        cy.get('input[placeholder="Name"]').click().clear().type('Auto2024');
    // Save     
        cy.get('Button[class="btn save body_b16"]').click().click();       

    })


})

