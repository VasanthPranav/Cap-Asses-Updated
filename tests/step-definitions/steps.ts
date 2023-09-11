import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/Homepage.js';
import AccountLoginPage from '../pageobjects/AccountLoginPage.js';
import CreateAccPage from '../pageobjects/CreateAccPage.js';
import MyAccountPage from '../pageobjects/MyAccountPage.js';
import CheckOutpage from '../pageobjects/CheckOutpage.js';
import * as fs from 'fs';




const jsonData = fs.readFileSync('D:/git/Cap-Asses/Utility/Enviroinment.json', 'utf-8');
const parsedData = JSON.parse(jsonData);
const URL_JSON = parsedData.URL.Test





Given(/^Launch URL$/, async () => {
    await HomePage.Launch(URL_JSON);
	
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


Then(/^provide invalid login details in registration Screen$/, async() => {

    await CreateAccPage.Submit_login_Details(parsedData.Credentials.Invalid_Username);

    // await CreateAccPage.Enable_Privacy_Policy();

    
});


Then(/^provide valid login details in registration Screen$/, async() => {

    await CreateAccPage.Submit_login_Details(parsedData.Credentials.valid_Username);

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






When(/^provide login details and click on submit$/, async () => {

   

	await AccountLoginPage.UserName_password_Input(parsedData.Credentials.Username,parsedData.Credentials.Password);

    await AccountLoginPage.Login_Button();
});  

When(/^provide invalid login details and click on submit$/, async () => {

   

	await AccountLoginPage.UserName_password_Input(parsedData.Credentials.Username,parsedData.Credentials.InvalidPassword);

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



