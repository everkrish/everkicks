
// @ts-ignore
describe("ManageShoes", () => {
    it('should visit the manage shoes page', () => {
        // Check input works on admin page
        cy.visit("http://localhost:3000/admin/shoes");
        cy.findByLabelText("Brand").select("British Knights");
        cy.findByLabelText("Shoe name").type("Oxford");
        cy.findByLabelText("Price").type("89.99");
        cy.findByLabelText("Shoe size").type("10.5");
        cy.findByLabelText("Release Date").type("1989-11-29");
        cy.findByRole("button", { name: "Add shoe" }).click();

        cy.findByRole("heading", { name: "Shoes" }).closest("section").findByText("British Knights Oxford");

        cy.findByLabelText("Shoe name").should('be.empty');
        cy.findAllByLabelText("Brand").should('have.value', "");

        // Go to home page and see that it's been updated
        cy.findByRole("navigation").findByRole("link", { name: "Home" }).click();
        cy.url().should("eq", "http://localhost:3000/");
        cy.findByRole("heading", { name: "Add Shoe" }).should('not.exist');
        cy.findByText("British Knights Oxford");
    });
})