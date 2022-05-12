/// <reference types="cypress" />

function deleteShoe(name: string) {
    cy.findByRole("button", { name: `Delete ${name}` }).click();

    cy.get(".Toastify")
        .findByText(`${name} was deleted`);
}

function addShoe(brand: string, name: string, price: number, size: number, date: string) {
    cy.findByLabelText("Brand").select(brand);
    cy.findByLabelText("Shoe name").type(name);
    cy.findByLabelText("Price").type(price);
    cy.findByLabelText("Shoe size").type(size);
    cy.findByLabelText("Release Date").type(date);
    cy.findByRole("button", { name: "Add shoe" }).click();

    cy.findByRole("heading", { name: "Shoes" }).closest("section").findByRole("heading", { name: `${brand} ${name}` });
}

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
        addShoe(
            "British Knights",
            "Oxford",
            89.99,
            10.5,
            "1989-11-29"
        );

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
        cy.findByRole("button", { name: "Delete British Knights Oxford" }).should("not.exist");

        // Test deleting british knights
        cy.findByRole("navigation").findByRole("link", { name: "Admin home" }).click();
        cy.url().should("eq", "http://localhost:3000/admin/shoes");

        deleteShoe("British Knights Oxford");
        deleteShoe("Nike Air Force 1");
        cy.findByText("No shoes :(");

        addShoe(
            "Nike",
            "Air Force 1",
            7,
            95,
            "1998-01-01"
        );
    });
})