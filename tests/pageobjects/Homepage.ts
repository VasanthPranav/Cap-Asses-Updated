import { $ } from '@wdio/globals'
import Page from './page.js';
import { browser } from '@wdio/globals'

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
        await this.Login_Register.click();
        
    }

    public async Checkout_Menu () {
        return this.Checkout.click();
    }

    public async Launch (url:any) {
        await  browser.url(url)

        await browser.deleteAllCookies();

        await browser.pause(3000)

        await browser.maximizeWindow();
        return browser.url(url)

        
        
    }

    public async login_Register_Page_Verify () {
        await browser.getTitle().then(async(Title)=>{

            expect(Title).to.equal("Account Login")

        })
        
    }


}

export default new Homepage();
