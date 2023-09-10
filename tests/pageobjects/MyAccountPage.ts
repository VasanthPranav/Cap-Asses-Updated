import { $ } from '@wdio/globals'
import Page from './page.js';
// import { browser } from '@wdio/globals'

import {  expect } from 'chai'


class MyAccountPage extends Page {

    public get MyAccount_heading () {
        return $('//*[@class="heading2"]/span');
    }


    public get Home_Menu () {
        return $('//*[@class="active menu_home"]');
    }


    //*[contains(@class,"menu_home")]







///////////////////////////////////////// Methods ////////////////////////////////////////////////    

    public async MyAccount_Verify () {
        await (await this.MyAccount_heading).getText().then(async(Title)=>{

            expect(Title).to.contains("MY ACCOUNT")
  
    })
        
    }

    public async Home_Menu_Button () {
        await this.Home_Menu.click();
        
    }


    public async Add_Item_Cart (Product:any) {

        const element = await $(`(//*[@title='${Product}']/parent::div/parent::div/following-sibling::div//*[@title="Add to Cart"])[1]`);
        await element.click();
        
    }

    

    



}

export default new MyAccountPage();
