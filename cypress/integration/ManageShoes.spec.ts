/// <reference types="cypress" />

// @ts-ignore
describe("ManageShoes", () => {
    it('should visit the manage shoes page', () => {
        cy.visit("http://localhost:3000/admin/shoes");

        cy.findByRole("heading", { name: "Nike Air Force 1" });

        // Check for error messages
        cy.findByRole("button", { name: "Add shoe" }).click();
        cy.findByRole("alert", { name: "Brand is required." });
        cy.findByRole("alert", { name: "Name is required." });
        cy.findByRole("alert", { name: "Price is required." });
        cy.findByRole("alert", { name: "Size is required." });
        cy.findByRole("alert", { name: "Date is required." });

        // Check input works on admin page
        cy.findByLabelText("Brand").select("British Knights");
        cy.findByLabelText("Shoe name").type("Oxford");
        cy.findByLabelText("Price").type("89.99");
        cy.findByLabelText("Shoe size").type("10.5");
        cy.findByLabelText("Release Date").type("1989-11-29");
        cy.findByRole("button", { name: "Add shoe" }).click();

        cy.findByRole("heading", { name: "Shoes" }).closest("section").findByRole("heading", { name: "British Knights Oxford" });

        // Check warnings don't exist
        cy.findByRole("alert", { name: "Brand is required." }).should('not.exist');
        cy.findByRole("alert", { name: "Name is required." }).should('not.exist');
        cy.findByRole("alert", { name: "Price is required." }).should('not.exist');
        cy.findByRole("alert", { name: "Size is required." }).should('not.exist');
        cy.findByRole("alert", { name: "Date is required." }).should('not.exist');

        cy.findByLabelText("Shoe name").should('be.empty');
        cy.findAllByLabelText("Brand").should('have.value', "");

        // Go to home page and see that it's been updated
        cy.findByRole("navigation").findByRole("link", { name: "Home" }).click();
        cy.url().should("eq", "http://localhost:3000/");
        cy.findByRole("heading", { name: "Add Shoe" }).should('not.exist');
        cy.findByText("British Knights Oxford");
    });
})