import { $ } from '@wdio/globals'
import Page from './page.js';
// import { browser } from '@wdio/globals'

// import {  expect } from 'chai'

import { assert, expect } from 'chai'


import * as action from '../../Utility/Action.ts';
import * as cheerio from 'cheerio';


class AccountLoginPage extends Page {

    public get ContinueBtn () {
        return $('//button[@title="Continue"]');
    }

    public get LoginBtn () {
        return $('//button[@title="Login"]');
    }

    public get inputLoginName () {
        return $('#loginFrm_loginname');
    }

    public get inputPassword () {
        return $('#loginFrm_password');
    }


    public get Error_Message () {
        return $('//*[contains(@class,"alert")]/button');
    }

    public get FirstName () {
        return $('#AccountFrm_firstname');
    }

    






///////////////////////////////////////// Methods ////////////////////////////////////////////////    

    public async Continue_Button () {
        await action.waitUntilClickable(this.ContinueBtn,5000);
        await this.ContinueBtn.click();

        
        await action.isElementEnabled(this.FirstName).then(async(enabled)=>{
            expect(enabled).to.equal(true)})
        
    }

    public async Login_Button () {

        await action.waitUntilClickable(this.LoginBtn,5000);
        await this.LoginBtn.click();
        
    }

    public async UserName_password_Input (Username: string | number,Password: string | number) {
        await action.waitforElementPresent(this.inputLoginName,5000);
        await this.inputLoginName.setValue(Username);
        await this.inputPassword.setValue(Password);
        
    }

    public async Error_Message_validate () {
        await this.Error_Message.getText().then(async(Title)=>{

            expect(Title).not.to.equal("")
        
    })
    const pageSource = await browser.getPageSource(); // Get the page's HTML source

    // Load the HTML source into Cheerio
    const $ = cheerio.load(pageSource);

    let searchText = "Error: Incorrect login or password provided"

    if ($(`*:contains("${searchText}")`).length > 0) {
       assert.equal(true,true)
      } else {
        assert.equal(true,false)
      }

}

    



}

export default new AccountLoginPage();
