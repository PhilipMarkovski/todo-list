import { browser, by, element } from 'protractor';
const protractorHelper = require("protractor-helper");

export class AppPage {

  navigateTo() {
    return browser.get('http://localhost:4200/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  getButton() {
    return element(by.xpath('/html/body/app-root/app-list/div/mat-card/div/button/span'));
  }
  
  NewInput() {
    return protractorHelper.fillFieldWithText((element(by.id('mat-input-1'))), "valid@email.com");
    // element(by.id('mat-input-1'));
  }
  
  NewInput1() {
    return element(by.id('mat-input-3'));
  }
  NewDeadlineDate() {
return element.all(by.css('div input[formcontrolname= "deadline"]'))
    //return element(by.xpath("//input[@formcontrolname= 'deadline')"))}
  }
  addButton() {
    return element(by.xpath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-form/form/div[4]/div[1]/button/span'));

  } 
  closeButton() {
    return element(by.xpath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-form/form/div[4]/div[2]/button/span'));

  }
}
