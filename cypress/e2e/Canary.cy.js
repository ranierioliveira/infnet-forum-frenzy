import { describe } from "mocha";
import { cy } from "cypress";

describe("", ()=> {
    it("", () => {
        cy.visit("http://localhost:5173");

        cy.get('[data-cy="login"]')
            .click();

            cy.get('[data-cy="username"]').type('testeUsuario');
            cy.get('[data-cy="password"]').type('testeSenha');
        
            cy.get('[data-cy="submit"]').click();
        
            cy.get('[data-cy="titulo"]').should('contain', 'Bem vindo(a) testUsuario!');
    });
})