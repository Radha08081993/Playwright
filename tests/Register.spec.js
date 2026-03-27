const{expect,test}=require('@playwright/test');

test('Register with new user',async ({page})=>  {
  const dropdown=page.locator("//select['.custom-select ng-valid ng-touched ng-dirty']");
  
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator(".text-reset").click();
    await page.locator("#firstName").fill("Radha");
    await page.locator("[type='lastName']").fill("Gade");
    await page.locator("[type='email']").fill("radha.gade@gmail.com");
    await page.locator("[formcontrolname='userMobile']").fill("9876543210");
    console.log(await dropdown.allTextContents());
    console.log(await page.selectOption("select[formcontrolname='occupation']", "3: Engineer"));

    //console.log(await dropdown.nth(2).click());  
    //await page.locator("text=Student").click();
    //await page.locator("//option['.custom-select ng-valid ng-touched ng-dirty']").nth(2).click();
    //await expect(page.locat or("//option['.custom-select ng-valid ng-touched ng-dirty']")).toHaveText('Student');
    //console.log(`${dropdown} is selected`);
    await page.locator("[value='Female']").check();
    await page.locator("#userPassword").fill("Shiv@1993");
    await page.locator("[formcontrolname='confirmPassword']").fill("Shiv@1993");
    await page.locator("[value='Register']").click();

});//annonymous function


test('Login into browser',async ({page})=>  {

  const productlist=page.locator(".card-body b");
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").type("radha.gade@gmail.com");
  await page.locator("#userPassword").fill("Shiv@1993");
  await page.locator("[type='submit']").click();
  console.log(await page.title13()); //This is to print the title of the page after login
  //await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  console.log(await productlist.allTextContents());
  await productlist.first().click();

  //added new comment new coment added

});


