import {test} from '@playwright/test';

import { general } from '../lib/General';

test('TC002_AddNewEmployee', async({page})=> {
    //Test Steps
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.waitTime();
    await gen.addNewEmployee();
    await gen.logout();

});