import { $ } from "@wdio/globals";

import { browser } from "@wdio/globals";
import * as action from "../../Utility/Action.ts";

class Homepage {
  public get Login_Register() {
    return $('//*[contains(text(),"Login or register")]');
  }

  public get Checkout() {
    return $('//*[@id="main_menu_top"]/li[4]/a/span');
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  public async login_Register() {
    await action.waitUntilClickable(this.Login_Register, 5000);
    await this.Login_Register.click();
  }

  public async Checkout_Menu() {
    await action.waitUntilClickable(this.Checkout, 5000);
    return this.Checkout.click();
  }

  public async Launch(url: any) {
    await browser.url(url);
    await browser.deleteAllCookies();
    await browser.pause(3000);
    await browser.maximizeWindow();
    await browser.url(url);
  }
}

export default new Homepage();
