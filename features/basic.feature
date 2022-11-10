Feature: Login
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: Login with success
    Given i fill email
    And i fill password
    When i tap enter
    Then i see the button Salvar