
import * as EC from 'wdio-wait-for';
// import { remote } from 'webdriverio';

// export class ReadExcel{

//     constructor() {

//     }



export async function waitforElementPresent(webElement, timeout = 10000) {

  try {

    await browser.waitUntil(EC.visibilityOf(webElement), { timeout: timeout, timeoutMsg: 'Failed, after waiting for the element to be visible' });

    return true;

  } catch (e) {

    throw e
  }

}

export async function waitUntilClickable(webElement, timeout: number) {

  try {

    let result = await browser.waitUntil(EC.elementToBeClickable(webElement), { timeout: timeout, timeoutMsg: 'Failed, after waiting for the element to be clickable' }).catch(e => { throw e })

      .then(result => { return result }).catch(e => { return e })

    if (result = true) {
      return result
    }
    else {

      throw result

    }

  }
  catch (e) {

    throw e

  }

}




export async function isElementEnabled(webElement) {

  let result = false;

  try {

    if (await webElement.getAttribute('aria-disabled') == 'true') {
      result = false;
    }

    else if (await webElement.getAttribute('aria-disabled') == 'false') {
      result = true;
    }
    else if (await webElement.getAttribute('aria-disabled') == null) {
      result = await webElement.isEnabled();
    }
  }

  catch (e) {
    throw e
  }
  return result;

}


export async function isElementExists(webElement) {

  let result = false;
  try {
    result = await webElement.isExisting();

  }
  catch (e) {
    throw e

  }
  return result;

}


