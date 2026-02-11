import {test,expect} from '@playwright/test';
import { Loginpage } from '../page/login';

test ('login test',async ({page})=>
{
    const Login =new Loginpage(page)//const for unchanable variable
    await Login.gotoLoginPage()
    await Login.login("tomsmith","SuperSecretPassword!")
})