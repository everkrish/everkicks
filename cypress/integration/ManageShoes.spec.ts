
describe("ManageShoes", () => {
    it('should visit the manage shoes page', () => {
        // Check input works on admin page
        cy.visit("http://localhost:3000/admin/shoes");
        cy.findByLabelText("Shoe name").type("Steve Madden");
        cy.findByRole("button", { name: "Add shoe" }).click();
        cy.findByText("Steve Madden");
        cy.findByLabelText("Shoe name").should('be.empty');

        // Go to home page and see that it's been updated
        cy.findByRole("navigation").findByRole("link", { name: "Home" }).click();
        cy.url().should("eq", "http://localhost:3000/");
        cy.findByLabelText("Shoe name").should('not.exist');
        cy.findByText("Steve Madden");
    });
})