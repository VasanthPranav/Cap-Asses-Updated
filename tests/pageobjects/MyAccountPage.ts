import { $ } from "@wdio/globals";

import * as action from "../../Utility/Action.ts";

class MyAccountPage {
  public get MyAccount_heading() {
    return $('//*[@class="heading2"]/span');
  }

  public get Home_Menu() {
    return $('//*[@class="active menu_home"]');
  }

  public async Home_Menu_Button() {
    await action.waitUntilClickable(this.Home_Menu, 5000);
    await this.Home_Menu.click();
  }

  public async Add_Item_Cart(Product: any) {
    const element = await $(
      `(//*[@title='${Product}']/parent::div/parent::div/following-sibling::div//*[@title="Add to Cart"])[1]`
    );
    await element.click();
  }
}

export default new MyAccountPage();
