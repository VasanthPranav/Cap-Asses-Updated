import { $ } from '@wdio/globals'
import Page from './page.js';

import { assert, expect } from 'chai'


import { ExcelReader } from '../../Utility/Excel.ts';

import * as cheerio from 'cheerio';



        const excelReader = new ExcelReader(globalThis.excelFilePath,globalThis.SheetName);
        const excelData = excelReader.readExcelData();
        




class CreateAccPage extends Page {

    public get FirstName () {
        return $('#AccountFrm_firstname');
    }

    public get LastName () {
        return $('#AccountFrm_lastname');
    }

    public get EmailID () {
        return $('#AccountFrm_email');
    }

    public get Address_1 () {
        return $('#AccountFrm_address_1');
    }

    public get City () {
        return $('#AccountFrm_city');
    }

    public get State () {
        return $('#AccountFrm_zone_id');
    }

    public get Zipcode () {
        return $('#AccountFrm_postcode');
    }

    public get Country () {
        return $('#AccountFrm_country_id');
    }

    public get Username_AccPage () {
        return $('#AccountFrm_loginname');
    }

    public get Password_AccPage () {
        return $('#AccountFrm_password');
    }

    public get ConfirmPassword_AccPage () {
        return $('#AccountFrm_confirm');
    }

    public get PrivacyPolicy () {
        return $('#AccountFrm_agree');
    }


    public get Continue () {
        return $('//*[@title="Continue"]');
    }


    public get Success_Message () {
        return $('//h1/span[1]/i')
    }


    public get Error_Message () {
        return $('//*[contains(@class,"alert")]')
    }

    // public get Error_Message () {
    //     return $('//*[contains(@class,"alert")]')
    // }











///////////////////////////////////////// Methods ////////////////////////////////////////////////    




    public async Submit_Personal_Info () {

        await this.FirstName.setValue( excelData.get('FirstName'));
        await this.LastName.setValue( excelData.get('LastName'));

        const currentDate = new Date();
        var today = new Date();
        
        let time = today.toLocaleTimeString().replace(/:/g,'').replace(/PM/g,'').replace(/AM/g,'')

        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const day = currentDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${month}${day}`;

        const myString = formattedDate+time.trim()+excelData.get('Email');

        await this.EmailID.setValue(myString );
        await this.Address_1.setValue(excelData.get('Address1'));

        await this.City.setValue(excelData.get('City'));
        await this.Country.selectByVisibleText(excelData.get('Country'));

        await this.Zipcode.setValue(excelData.get('Zipcode'));

        await browser.pause(3000);


        (await this.State).selectByIndex(2)

        

        
        
    }

    public async Submit_login_Details (username) {
        var today = new Date();
        let time = today.toLocaleTimeString().replace(/:/g,'').replace(/PM/g,'').replace(/AM/g,'')
        let Username = excelData.get('UserName')+time.trim()

        console.log("Invalid_username" + username)

       

        if(username == "null"){

            await this.Username_AccPage.setValue(username);

        }

        else{

            await this.Username_AccPage.setValue(Username);
        }

    
        
        await this.Password_AccPage.setValue(excelData.get('Password'));

        await this.ConfirmPassword_AccPage.setValue(excelData.get('Password'));
        
    }

    public async Enable_Privacy_Policy () {


await browser.pause(10000);


try {
   

   
    const element = await browser.$('//*[@id="AccountFrm_agree"]'); // Replace with your element selector

    await browser.execute(function (element) {
      element.click();
    }, element);
  } catch (error) {
    console.error('Error:', error);
  }

  await browser.pause(10000);
  
    }


    public async ContinueBtn () {
        await this.Continue.click();
  
    }

    public async Message_validation () {
        await browser.getTitle().then(async(Title)=>{

            expect(Title).to.equal("Your Account Has Been Created!")
  
    })

}


    public async Error_Message_validation () {
        await this.Error_Message.getText().then(async(Title)=>{

            expect(Title).not.to.equal("")
  
    })

    const pageSource = await browser.getPageSource(); // Get the page's HTML source

    // Load the HTML source into Cheerio
    const $ = cheerio.load(pageSource);

    let searchText = "Login name must be alphanumeric only and between 5 and 64 characters"

    if ($(`*:contains("${searchText}")`).length > 0) {
       assert.equal(true,true)
      } else {
        assert.equal(true,false)
      }

    

}









  



}

export default new CreateAccPage();
