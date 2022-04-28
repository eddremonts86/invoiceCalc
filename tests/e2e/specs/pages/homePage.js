// https://docs.cypress.io/api/table-of-contents

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Visits the app root url", () => {
    cy.contains("h1", "Invoice Calculator");
  });

  it("It is posible to navigate using action button", () => {
    cy.dataCyClick("invoice-calculator-button");
    cy.contains("h1", "Invoice Calculator");
  });

  it("It is posible to navigate Home page using top bar link", () => {
    cy.dataCyClick("home-root-link");
    cy.contains("h1", "Invoice Calculator");
  });

  it("It is posible to navigate Calculator using top bar link", () => {
    cy.dataCyClick("home-calculator-link");
    cy.contains("h1", "Invoice Calculator");
  });
});
