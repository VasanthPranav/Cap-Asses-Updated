Feature: Validation on ecommerce webpage

  @Validate
  Scenario Outline: Verify whether user is able to successfully register in the Automation test Store
    Given Launch URL
    Then Verify whether homepage is displayed
    And navigate to registration screen
    Then Application should be navigated to registration Screen
    When click on continue link in account login screen
    Then Create Account page should be displayed
    Then provide Personal details in registration Screen
    Then provide valid login details in registration Screen
    And Click on submit in Create account screen
    Then Verify whether expected message is displayed



  Scenario Outline: Verify whether applicaiton throws error when invalid details are entered during registration
    Given Launch URL
    Then Verify whether homepage is displayed
    And navigate to registration screen
    Then Application should be navigated to registration Screen
    When click on continue link in account login screen
    Then Create Account page should be displayed
    Then provide Personal details in registration Screen
    Then provide invalid login details in registration Screen
    And Click on submit in Create account screen
    Then Verify whether "Login name must be alphanumeric only and between 5 and 64 characters" is displayed




  Scenario Outline: Verify whether user is able to successfully login
    Given Launch URL
    Then Verify whether homepage is displayed
    And navigate to registration screen
    Then Application should be navigated to registration Screen
    When provide login details and click on submit
    Then validate home page is displayed


  Scenario Outline: Verify whether application throws error when user enters incorrect credentials
    Given Launch URL
    Then Verify whether homepage is displayed
    And navigate to registration screen
    Then Application should be navigated to registration Screen
    When provide invalid login details and click on submit
    Then Verify whether "Error: Incorrect login or password provided" is displayed


  Scenario Outline: Verify whether user able to add product to cart and validate the same in checkout page
    Given Launch URL
    Then Verify whether homepage is displayed
    And navigate to registration screen
    Then Application should be navigated to registration Screen
    When provide login details and click on submit
    Then validate home page is displayed
    And navigate to home screen
    Then add "<Product>" to cart
    When Navigate to checkout page
    Then Validate whether "<Product>" is added in the cart


    Examples:
      | Product                 |
      | Skinsheen Bronzer Stick |








