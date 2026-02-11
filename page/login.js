exports.Loginpage = class Loginpage{
    
    constructor(page){
        this.page =page
        this.username_text = page.getByLabel('Username')
        this.pass_box = page.getByLabel('Password')   
        this.login_but = page.getByRole('button',{name:' Login'})
     }
     async gotoLoginPage (){
        await this.page.goto('https://the-internet.herokuapp.com/login')

     }
     async login(username,Password){
       await this.username_text .fill(username)
       await this.pass_box.fill(Password)
        await this.login_but.click()
     }
}