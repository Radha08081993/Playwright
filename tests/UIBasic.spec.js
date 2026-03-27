const{test, expect}=require('@playwright/test');

 

test('First Test with invalid login',async ({browser})=>  //annonymous function
{
    
    const context= await browser.newContext();   //It will open fresh browser with injected proxy or cookies
    const page= await context.newPage(); //It will open page
    
   const userName=page.locator('#username');  //Xpath of Username
    const password=page.locator("[type='password']"); // Xpath
    const signinbutton=page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshettyacademy123");
    await password.fill("Learning@830$3mK2");
    await signinbutton.click();
    console.log(await  page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    console.log("Test is passed")

       
});

test('Second Test Withoutcontext',async ({page})=>  //It will run only this test Case 
    {

    const userName=page.locator('#username');  //Xpath of Username
    const password=page.locator("[type='password']"); // Xpath
    const signinbutton=page.locator("#signInBtn");
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await expect(page).toHaveTitle("Google");
       
       await userName.fill("rahulshettyacademy");
       await password.fill("Learning@830$3mK2");
       await signinbutton.click();
        console.log(await page.title());
        await page .locator(".card-body a").first().click(); //to take first element of the list
        //await page.locator(".card-body a").nth(1).click(); //to take second element of the list

    });



    test('Handle radio buttons and drodowns',async({page})=>
    {
        const userName=page.locator('#username');  //Xpath of Username
        const password=page.locator("[type='password']");
        const dropdown=page.locator("select.form-control");
        const blinktest= page.locator("[href*='documents-request']");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await userName.fill("rahulshettyacademy");
        await password.fill("Learning@830$3mK2");
        await page.locator("input[value='user']").click();
        console.log(page.locator("input[value='user']").isChecked());

        //This assertion will pass only if the radio button is selected
        await expect(page.locator("input[value='user']")).toBeChecked();
        await dropdown.selectOption("consult");
        await page.locator("#okayBtn").click();
        //await page.pause();
        //to check checkbox on the page
        await page.locator("#terms").click();
        expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        //action is perform inside the bracket hence expect used inside
        expect(await page.locator("#terms").isChecked()).toBeFalsy();
        await expect(blinktest).toHaveAttribute("class","blinkingText");
        


       

    });

    test.only('Handle windows and tabs',async({browser})=>
    {
        const context=await browser.newContext();
        const page=await context.newPage();
         const userName=page.locator('#username'); 
        const blinktext=page.locator("[href*='documents-request']");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

       const [newPage]=await Promise.all([context.waitForEvent('page'),
        blinktext.click()
        ])

        const text = await newPage.locator("p.im-para.red").textContent();
        console.log(text);

    // fetch domain
        const arrayText = text.split("@");
        const domain = arrayText[1].split(" ")[0];
        console.log(domain);

        // enter domain in parent page
        await page.locator("#username").fill(domain);
        await page.pause();

        // verify value
        console.log(await page.locator("#username").inputValue()); //grab value for locator after filling
        

    });
    




