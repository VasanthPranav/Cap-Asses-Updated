import { $ } from '@wdio/globals'
import Page from './page.js';
// import { browser } from '@wdio/globals'

import {  expect } from 'chai'


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

    






///////////////////////////////////////// Methods ////////////////////////////////////////////////    

    public async Continue_Button () {
        await this.ContinueBtn.click();
        
    }

    public async Login_Button () {
        await this.LoginBtn.click();
        
    }

    public async UserName_password_Input (Username: string | number,Password: string | number) {
        await this.inputLoginName.setValue(Username);
        await this.inputPassword.setValue(Password);
        
    }

    public async Error_Message_validate () {
        await this.Error_Message.getText().then(async(Title)=>{

            expect(Title).not.to.equal("")
        
    })
}

    



}

export default new AccountLoginPage();
