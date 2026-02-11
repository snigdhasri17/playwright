import{test,expect} from '@playwright/test';
import { request } from 'node:http';
test.only('Demo Api test Get',async({request})=>
{
const response =await request.get('https://app.reqres.in/playground',{
    headers:{
        "x-api-key":'reqres_7028574cf3734661b8e8a79f8c953f79'
    }})
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(test).toContain('Janet');
    console.log(await response.json());
})