import { $, $$ } from "@wdio/globals";

import { Element } from "webdriverio";

import { assert } from "chai";

class CheckOutPage {
  public get ContinueBtn() {
    return $('//button[@title="Continue"]');
  }

  public async Checkout_Product(Product: String) {
    const elements: Element[] = await $$(
      '//*[contains(@class,"sidewidt")]/table/.//a'
    );
    let Status: Boolean = false;
    console.log("Status" + Status);
    for (const element of elements) {
      const text = await element.getText();
      console.log("text" + text);
      if (text == Product) {
        Status = true;
      }
    }

    if ((Status = false)) {
      assert.equal(true, false);
    }
  }
}

export default new CheckOutPage();
