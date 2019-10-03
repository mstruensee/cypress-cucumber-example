beforeEach(() => {
  cy.log(
    "This will run before every scenario of step_defintion.feature test, but NEVER for Facebook/step_defintion feature files"
  );
});
