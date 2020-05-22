describe('Form inputs', () => { //it is passing just syntax
   it("can navigate to the site", () =>{
       cy.visit("http://localhost:3003/pizza-form")
       cy.url().should('include', 'localhost')
   })

   it('can type a name', () => {
    cy.get('input[name="name"]')
        .type("lady gaga")
})

    it("select toppings", () => {
        cy.get('[type="checkbox"]').check()
    })

    it("can submit form", () => {
        cy.get('form').submit()
    })
})

    
