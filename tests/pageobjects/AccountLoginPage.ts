import { $ } from "@wdio/globals";

// import { assert } from "chai";

import * as action from "../../Utility/Action.ts";
// import * as cheerio from "cheerio";

class AccountLoginPage {
  public get ContinueBtn() {
    return $('//button[@title="Continue"]');
  }

  public get LoginBtn() {
    return $('//button[@title="Login"]');
  }

  public get inputLoginName() {
    return $("#loginFrm_loginname");
  }

  public get inputPassword() {
    return $("#loginFrm_password");
  }

  public get Error_Message() {
    return $('//*[contains(@class,"alert")]/button');
  }

  public get FirstName() {
    return $("#AccountFrm_firstname");
  }

  public async Continue_Button() {
    await action.waitUntilClickable(this.ContinueBtn, 5000);
    await this.ContinueBtn.click();
  }

  public async Login_Button() {
    await action.waitUntilClickable(this.LoginBtn, 5000);
    await this.LoginBtn.click();
  }

  public async UserName_password_Input(
    Username: string | number,
    Password: string | number
  ) {
    await action.waitforElementPresent(this.inputLoginName, 5000);
    await this.inputLoginName.setValue(Username);
    await this.inputPassword.setValue(Password);
  }
}

export default new AccountLoginPage();
