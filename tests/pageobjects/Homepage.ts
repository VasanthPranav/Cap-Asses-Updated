import { $ } from '@wdio/globals'
import Page from './page.js';
import { browser } from '@wdio/globals'
import * as action from '../../Utility/Action.ts';
import {  expect } from 'chai'


class Homepage extends Page {

    public get Login_Register () {
        return $('//*[contains(text(),"Login or register")]');
    }

    public get Checkout () {
        return $('//*[@id="main_menu_top"]/li[4]/a/span');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }



///////////////////////////////////////// Methods ////////////////////////////////////////////////    

    public async login_Register () {
        await action.waitUntilClickable(this.Login_Register,5000);
        await this.Login_Register.click();
        
    }

    public async Checkout_Menu () {
        await action.waitUntilClickable(this.Checkout,5000);
        return this.Checkout.click();
    }

    public async Launch (url:any) {
        await  browser.url(url)
        await browser.deleteAllCookies();
        await browser.pause(3000)
        await browser.maximizeWindow();
        await browser.url(url)

        await action.isElementEnabled(this.Checkout).then(async(enabled)=>{
            expect(enabled).to.equal(true)})
        
        
    }

    public async login_Register_Page_Verify () {
        await browser.getTitle().then(async(Title)=>{

            expect(Title).to.equal("Account Login")

        })
        
    }


}

export default new Homepage();
