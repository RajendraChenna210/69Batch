// To provide all Reusable methods to the whole application

import { global } from "./Global";

export class general extends global {
    //user defined functions
    //open application
public async openApplication() {
    await this.page.goto(this.url);
    console.log("Application opened");
}
//login into the application
public async login() {
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login Completed");
}
//logout into the application
public async logout(){
    await this.page.locator(this.link_logout).click();
    console.log("Logout Completed");
}
//add employee
public async addNewEmployee() {
    const frame = this.page.frameLocator(this.frame_empinfo);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_empfirstname).fill(this.empFirstname);
    await frame.locator(this.textbox_emplastname).fill(this.empLastname);
    await frame.locator(this.button_save).click();
    console.log("new Employee added");
}
public async waitTime() {
    await this.page.waitForTimeout(3000);
}
}
