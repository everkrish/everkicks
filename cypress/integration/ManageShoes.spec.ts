import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "src/App";

describe("ManageShoes", () => {
    it('should visit the manage shoes page', () => {
        cy.visit("http://localhost:3000/admin/shoes");
        cy.findByLabelText("Shoe name").type("Steve Madden");
        cy.findByRole("button", { name: "Add shoe" }).click();
        cy.findByText("Steve Madden");
        cy.findByLabelText("Shoe name").should('be.empty');
    });
})