// https://docs.cypress.io/api/table-of-contents

describe("Calculation Page", () => {
  beforeEach(() => {
    cy.visit("/calculator");
  });

  it("Visits the Calculation page", () => {
    cy.contains("h1", "Invoice Calculator");
  });

  it("Add  Product in calculation page", () => {
    cy.dataCyFillFieldInput("product-name-field", "Product-cy-test");
    cy.dataCyFillFieldInput("product-price-field", 5);
    cy.dataCyFillFieldInput("product-quantity-field", 5);
    cy.dataCyClick("add-product-button");
    cy.contains("Product-cy-test");
  });

  it("Search for product in calculation page", () => {
    cy.dataCyFillFieldInput("search-product-field", "Product-cy-test");
    cy.contains("Product-cy-test");
  });

  it("Delete Product in calculation page", () => {
    cy.contains("td", "Product-cy-test")
      .parent()
      .find(".v-simple-checkbox")
      .click();
    cy.dataCyClick("delete-product-button");
  });
});
