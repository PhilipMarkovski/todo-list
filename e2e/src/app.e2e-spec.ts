import { AppPage } from './app.po';
import { browser, element, logging, by } from 'protractor';
const protractorHelper = require("protractor-helper");

describe("Calculator test", function(){
    var Header = element(by.tagName('h5'));
    it("async method", async()=>{
     await browser.get("http://localhost:4200/");
     try{let HeaderText = await Header.getText();
        console.log("Browser Header :-" + HeaderText);}
      catch(error){console.log(error)}
    }) 
})
// describe("Calculator test", function(){
//     var Header = element(by.tagName('h1'));
//     beforeEach(function(){
//         browser.get("http://localhost:4200/");
//     })
//     it("Launch url check", function(){
//        let HeaderText = Header.getText();
//        HeaderText.then(function(txt){
//          console.log("Browser Header :-" + txt);
//        });
//       })
//     })
  
// })
// describe("Test without resolving promise", function(){
//     var Header = element(by.tagName('h1'));
//     beforeEach(function(){
//         browser.get("http://localhost:4200/");
//     })
//     it("Launch url check", function(){
//        let HeaderText = Header.getText();
//        console.log("Header :-" + HeaderText);
//   })
  
// })
// describe('angularjs homepage', function() {
//   it('should greet the named user', async function() {
//     debugger;
//     await browser.get('http://www.angularjs.org');

//     await element(by.model('yourName')).sendKeys('Julie');

//     let greeting = element(by.binding('yourName'));

//     expect(await greeting.getText()).toEqual('Hello Julie!');
//   });

//   describe('todo list', function() {
//     let todoList;

//     beforeEach(async function() {
//       await browser.get('http://www.angularjs.org');
//       todoList = element.all(by.repeater('todo in todoList.todos'));
//     });

//     it('should list todos', async function() {
//       expect(await todoList.count()).toEqual(2);
//       expect(await todoList.get(1).getText()).toEqual('build an AngularJS app');
//     });

//     it('should add a todo', async function() {
//       let addTodo = element(by.model('todoList.todoText'));
//       let addButton = element(by.css('[value="add"]'));/html/body/app-root/app-list/div/mat-card/div/button/span

//       await addTodo.sendKeys('write a protractor test');
//       await addButton.click();

//       expect(await todoList.count()).toEqual(3);
//       expect(await todoList.get(2).getText()).toEqual('write a protractor test');
//     });
//   });
// });

// // describe('workspace-project App', () => {
// //   let page: AppPage;
// //   beforeEach(() => {
// //     page = new AppPage();
// //   });
// //   describe('angularjs homepage', function () {
// //     it('should greet the named user', async function () {
// //       await page.navigateTo();

// //       await element(by.css('div input[placeholder= "Filter"]')).sendKeys('test')
// //       var greeting = element(by.binding('div input[placeholder= "Filter"]'));

// //       expect(await greeting.getText()).toEqual('test');
// //     });


// //     // it('should display welcome message', () => {
// //     //   page.navigateTo();
// //     //   expect(page.getTitleText()).toEqual('My Tasks for Montblanc');
// //     // });
// //     // it('should click button', () => {
// //     //   page.getButton().click();
// //     //   page.NewInput().sendKeys('1/01/2023');;
// //     //   page.NewDeadlineDate();
// //     //   page.addButton().click();
// //     //   page.closeButton().click();


// //     //   browser.sleep(3000)
// //     //   page.getButton().click();
//     //   page.NewInput1().sendKeys('TEST');
//     //   page.NewDeadlineDate().sendKeys('1/01/2023');
//     //   page.addButton().click();
//     //   page.closeButton().click();


//     //   browser.sleep(3000)
//     // });

//     afterEach(async () => {
//       // Assert that there are no errors emitted from the browser
//       const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//       expect(logs).not.toContain(jasmine.objectContaining({
//         level: logging.Level.SEVERE,
//       } as logging.Entry));
//     });
//   });
