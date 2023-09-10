import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

import HomePage from '../pageobjects/Homepage.js';

import AccountLoginPage from '../pageobjects/AccountLoginPage.js';

import CreateAccPage from '../pageobjects/CreateAccPage.js';
import MyAccountPage from '../pageobjects/MyAccountPage.js';
import CheckOutpage from '../pageobjects/CheckOutpage.js';

// import * as data from '../../Utility/Enviroinment.json' ;


// import * as configData from '../../Utility/Enviroinment.json' assert { type: 'json' };

const pages :any = {
    login: LoginPage
}

// console.log("configData" + configData)


// const configData = require('./config.json');

Given(/^I am on the (\w+) page$/, async (page:any) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});




Given(/^Launch "([^"]*)"$/, async (URL) => {
	

    await HomePage.Launch(URL);
	
});

Then(/^navigate to registration screen and validate screen name$/, async () => {
	await HomePage.login_Register()

    await HomePage.login_Register_Page_Verify()
});

When(/^click on continue link in account login screen and validate$/, async () => {
    await AccountLoginPage.Continue_Button()
});

Then(/^provide Personal details in registration Screen$/, async() => {
    await CreateAccPage.Submit_Personal_Info();


    await CreateAccPage.Enable_Privacy_Policy();

    
});

Then(/^provide login details in registration Screen "([^"]*)"$/, async(USERNAME:any) => {

    await CreateAccPage.Submit_login_Details(USERNAME);

    // await CreateAccPage.Enable_Privacy_Policy();

    
});

Then(/^Click on submit in Create account screen$/, async() => {

    await CreateAccPage.ContinueBtn();
	
});

Then(/^Verify whether expected message is displayed$/, async() => {
	await CreateAccPage.Message_validation();
});




Then(/^Verify whether error is displayed in account registration screen$/, async () => {
	
	await CreateAccPage.Error_Message_validation()
});






When(/^provide "([^"]*)" and "([^"]*)" login details and click on submit$/, async (username,password) => {

	await AccountLoginPage.UserName_password_Input(username,password);

    await AccountLoginPage.Login_Button();
});  

Then(/^validate home page is displayed$/, async() => {

	await MyAccountPage.MyAccount_Verify();
	

});
   


Then(/^Expected error message should be displayed$/, async() => {
	

	await AccountLoginPage.Error_Message_validate();
});




When(/^navigate to home screen$/, async() => {

	await MyAccountPage.Home_Menu_Button();
	
});

Then(/^add "([^"]*)" to cart$/, async(Product) => {
	await MyAccountPage.Add_Item_Cart(Product)
});

When(/^Navigate to checkout page$/, async() => {
	await HomePage.Checkout_Menu();
});

Then(/^Validate whether "([^"]*)" is added in the cart$/, async(Product) => {
	

	await CheckOutpage.Checkout_Product(Product);
});



