import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Employee data validation', async ({ page }) => {

    // Read JSON file
    const jsonData = fs.readFileSync('./Data/Td.json', 'utf-8');

    // Deserialize JSON string into JavaScript object
    const employeeData = JSON.parse(jsonData);

    console.log(employeeData);

    // Read second mobile number
    const secondMobile = employeeData.phone.mobile2;
    console.log('Second mobile number:', secondMobile);

    // Verify that skillset contains API testing
    expect(employeeData.skills).toContain('api_testing');
});