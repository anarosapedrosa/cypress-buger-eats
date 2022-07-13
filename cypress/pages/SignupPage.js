class SignupPage {

    go() {
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats')
    }


    goSignUp() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        //Preenche os inputs
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        //Clica em Buscar CEP
        cy.get('input[type=button][value="Buscar CEP"]').click()
        //Preenche os inputs
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        //Valida se as informações do Buscar CEP estão corretas
        cy.get('input[name="address"]').should('have.value',deliver.address.street)
        cy.get('input[name="district"]').should('have.value',deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)

        cy.contains('.delivery-method  li',deliver.delivery_method).click()

        cy.get('.dropzone input').attachFile('/images/' + deliver.cnh)
    }

    submit() {
        cy.get('.button-success').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

}

export default new SignupPage;