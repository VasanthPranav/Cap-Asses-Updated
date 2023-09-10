Feature: Validation on ecommerce webpage

  Scenario Outline: Verify whether user is able to successfully register in the Automation test Store
    Given Launch "<Url>"
    And navigate to registration screen and validate screen name
    When click on continue link in account login screen and validate
    Then provide Personal details in registration Screen
    Then provide login details in registration Screen "<UserName>"
    And Click on submit in Create account screen
    Then Verify whether expected message is displayed

  Examples:
    |  UserName | Url |
    |           |https://automationteststore.com/ |
    

  
   Scenario Outline: Verify whether applicaiton throws error when invalid details are entered during registration
    Given Launch "<Url>"
    And navigate to registration screen and validate screen name
    When click on continue link in account login screen and validate
    Then provide Personal details in registration Screen
    Then provide login details in registration Screen "<UserName>"
    And Click on submit in Create account screen
    Then Verify whether error is displayed in account registration screen

  Examples:
    |  UserName  |   Url |
    | First_Test |  https://automationteststore.com/ |


  
  Scenario Outline: Verify whether user is able to successfully login
    Given Launch "<Url>"
    And navigate to registration screen and validate screen name
    When provide "<Username>" and "<password>" login details and click on submit
    Then validate home page is displayed

     Examples:
    |  Username  |  password | Url |
    | Test5626   |   Test5626 |https://automationteststore.com/ |
  

  Scenario Outline: Verify whether application throws error when user enters incorrect credentials
    Given Launch "<Url>"
    And navigate to registration screen and validate screen name
    When provide "<Username>" and "<password>" login details and click on submit
    Then Expected error message should be displayed

       Examples:
    |  Username  |  password   | Url |
    | Test5626   |   Test56265 |https://automationteststore.com/ |


  Scenario Outline: Verify whether user able to add product to cart and validate the same in checkout page
    Given Launch "<Url>"
    And navigate to registration screen and validate screen name  
    When provide "<Username>" and "<password>" login details and click on submit
    Then validate home page is displayed
    And navigate to home screen 
    Then add "<Product>" to cart
    When Navigate to checkout page
    Then Validate whether "<Product>" is added in the cart

  
       Examples:
    |  Username  |  password  |  Product                | Url   |
    | Test5626   |   Test5626 | Skinsheen Bronzer Stick |https://automationteststore.com/ |
 
   
 


    

    
